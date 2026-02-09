import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { CheckCircle, HelpCircle, ArrowRight, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Course } from "@/data/courses";

interface EligibilitySectionProps {
  course: Course;
}

const EligibilitySection = ({ course }: EligibilitySectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  // Animated progress ring
  const [progressAnimated, setProgressAnimated] = useState(false);
  const marksPercent = course.eligibility.minMarks ? parseInt(course.eligibility.minMarks.replace(/[^0-9]/g, "")) || 0 : 0;

  useEffect(() => {
    if (isInView && !progressAnimated) {
      const timer = setTimeout(() => setProgressAnimated(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, progressAnimated]);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < course.eligibility.quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Check eligibility
      const allCorrect = course.eligibility.quizQuestions.every(
        (q, i) => (newAnswers[i] === true) === q.yesIsCorrect
      );
      setIsEligible(allCorrect);
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizComplete(false);
    setIsEligible(false);
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progressAnimated ? (marksPercent / 100) * circumference : circumference);

  return (
    <section ref={sectionRef} id="eligibility" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              WHO CAN APPLY
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Eligibility Criteria
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Eligibility Info */}
          <div className="lg:w-[60%]">
            {/* Primary Eligibility */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="bg-cream rounded-xl p-6 flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-lg font-semibold text-foreground">
                {course.eligibility.primary}
              </p>
            </motion.div>

            {/* Extra Requirements */}
            {course.eligibility.extras.length > 0 && (
              <div className="space-y-3 mb-8">
                {course.eligibility.extras.map((extra, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{extra}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Minimum Marks Ring */}
            {course.eligibility.minMarks && (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">{course.eligibility.minMarks}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Minimum Aggregate</p>
              </motion.div>
            )}
          </div>

          {/* Right Column - Quiz */}
          <div className="lg:w-[40%]">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-white" />
                <h3 className="text-xl font-semibold text-white">
                  Quick Check: Am I Eligible?
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {!quizStarted && !quizComplete && (
                  <motion.div
                    key="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-cream/80 mb-6">
                      Answer a few quick questions to check if you meet the requirements.
                    </p>
                    <Button
                      onClick={() => setQuizStarted(true)}
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                    >
                      Start Quiz
                    </Button>
                  </motion.div>
                )}

                {quizStarted && !quizComplete && (
                  <motion.div
                    key={`question-${currentQuestion}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-lg mb-6">
                      {course.eligibility.quizQuestions[currentQuestion].question}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleAnswer(true)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl"
                      >
                        Yes
                      </Button>
                      <Button
                        onClick={() => handleAnswer(false)}
                        variant="outline"
                        className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-xl"
                      >
                        No
                      </Button>
                    </div>
                    <p className="text-cream/60 text-sm mt-4 text-center">
                      Question {currentQuestion + 1} of {course.eligibility.quizQuestions.length}
                    </p>
                  </motion.div>
                )}

                {quizComplete && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                    className="text-center"
                  >
                    {isEligible ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <Check className="w-8 h-8 text-white" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-green-400 mb-2">
                          You're eligible! 🎉
                        </h4>
                        <p className="text-cream/80 mb-6">
                          Great news! You meet all the requirements.
                        </p>
                        <Button
                          asChild
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                        >
                          <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <HelpCircle className="w-8 h-8 text-amber-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-amber-400 mb-2">
                          You may still qualify
                        </h4>
                        <p className="text-cream/80 mb-6">
                          Speak to our admissions team to explore your options.
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-white text-white hover:bg-white/10 rounded-xl"
                        >
                          <Link to="/contact-us">Contact Admissions</Link>
                        </Button>
                      </>
                    )}
                    <button
                      onClick={resetQuiz}
                      className="mt-4 text-cream/60 hover:text-cream text-sm flex items-center justify-center gap-2 mx-auto"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
