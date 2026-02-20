import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Bot, Volume2, Loader2 } from "lucide-react";

const AGENT_ID = "agent_6601khwa75qfe8rvmec6t7pavc1a";

const SalesAgentWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      setIsConnecting(false);
    },
    onDisconnect: () => {
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error("Agent error:", error);
      setIsConnecting(false);
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setIsConnecting(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleClose = async () => {
    if (conversation.status === "connected") {
      await conversation.endSession();
    }
    setIsOpen(false);
  };

  const isConnected = conversation.status === "connected";

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 px-5 py-3.5 bg-violet-600 text-white rounded-full shadow-2xl hover:bg-violet-700 transition-colors relative"
        title="Talk to Prashanthi"
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          {isConnected && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white animate-pulse" />
          )}
        </div>
        <span className="font-semibold text-sm whitespace-nowrap">Talk to Prashanthi</span>
        {isConnected && (
          <span className="flex items-center gap-1 text-xs text-violet-200">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        )}
      </motion.button>

      {/* Conversation panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-8 z-50 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-violet-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Prashanthi</p>
                  <p className="text-violet-200 text-xs">
                    {isConnected ? (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                        Live
                      </span>
                    ) : "AI-powered voice assistant"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col items-center gap-4">
              {/* Visualizer / Status */}
              <div className="w-24 h-24 rounded-full bg-violet-50 dark:bg-violet-950 flex items-center justify-center relative">
                {isConnected && conversation.isSpeaking ? (
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-violet-400"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                ) : isConnected ? (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-violet-300"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                ) : null}
                <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center">
                  {isConnected ? (
                    conversation.isSpeaking ? (
                      <Volume2 className="w-7 h-7 text-violet-600" />
                    ) : (
                      <Mic className="w-7 h-7 text-violet-600" />
                    )
                  ) : (
                    <Bot className="w-7 h-7 text-violet-400" />
                  )}
                </div>
              </div>

              {/* Status text */}
              <div className="text-center">
                {isConnected ? (
                  <>
                    <p className="font-semibold text-foreground text-sm">
                      {conversation.isSpeaking ? "Agent is speaking..." : "Listening to you..."}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Speak naturally — ask about programs, admissions, or campus life
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-foreground text-sm">Ask about SVYASA</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Programs · Admissions · Campus life · Yoga research
                    </p>
                  </>
                )}
              </div>

              {/* Action button */}
              {isConnected ? (
                <motion.button
                  onClick={stopConversation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium text-sm transition-colors"
                >
                  <MicOff className="w-4 h-4" />
                  End Conversation
                </motion.button>
              ) : (
                <motion.button
                  onClick={startConversation}
                  disabled={isConnecting}
                  whileHover={{ scale: isConnecting ? 1 : 1.05 }}
                  whileTap={{ scale: isConnecting ? 1 : 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-full font-medium text-sm transition-colors"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      Start Voice Chat
                    </>
                  )}
                </motion.button>
              )}

              <p className="text-muted-foreground text-xs text-center">
                🎙️ Microphone access required
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SalesAgentWidget;
