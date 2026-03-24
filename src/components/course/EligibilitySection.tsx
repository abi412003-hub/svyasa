import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { CheckCircle, HelpCircle, ArrowRight, RefreshCw, Check, Shield } from "lucide-react";
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

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
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
    <section ref={sectionRef} id="eligibility" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(180 45% 35%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WHO CAN APPLY
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Eligibility Criteria
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-[58%]">
            {/* Primary Eligibility - Gradient card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="relative rounded-2xl overflow-hidden mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50" />
              <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Key Requirements</h3>
                </div>
                <ul className="space-y-3">
                  {course.eligibility.primary
                    .split(/\*\s*/)
                    .map(item => item.trim())
                    .filter(Boolean)
                    .map((item, i) => (
                      <motion.li
                        key={i}
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                </ul>
              </div>
            </motion.div>

            {/* Extra Requirements */}
            {course.eligibility.extras.length > 0 && (
              <div className="space-y-4 mb-10">
                {course.eligibility.extras.map((extra, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-cream/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{extra}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Minimum Marks Ring - Enhanced */}
            {course.eligibility.minMarks && (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-cream to-transparent"
              >
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--border))" strokeWidth="5" />
                    <circle
                      cx="50" cy="50" r="45" fill="none"
                      strokeWidth="5" strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-[1.5s] ease-out"
                      style={{ stroke: "url(#ringGradient)" }}
                    />
                    <defs>
                      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(25 84% 50%)" />
                        <stop offset="100%" stopColor="hsl(42 65% 55%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{course.eligibility.minMarks}</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Minimum Aggregate</p>
                  <p className="text-sm text-muted-foreground mt-1">Required across qualifying examination</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Premium Quiz Card */}
          <div className="lg:w-[42%]">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-navy-dark" />
              {/* Mesh overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 70% 20%, hsl(25 84% 50%), transparent 50%), radial-gradient(circle at 30% 80%, hsl(42 65% 55%), transparent 50%)"
              }} />
              
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Quick Eligibility Check
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  {!quizStarted && !quizComplete && (
                    <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <p className="text-white/70 mb-8 leading-relaxed">
                        Answer a few quick questions to check if you meet the requirements for this program.
                      </p>
                      <Button
                        onClick={() => setQuizStarted(true)}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl py-3 shadow-lg shadow-primary/30"
                      >
                        Start Quiz
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                      {/* Progress bar */}
                      <div className="h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentQuestion + 1) / course.eligibility.quizQuestions.length) * 100}%` }}
                        />
                      </div>
                      <p className="text-white text-lg font-medium mb-8 leading-relaxed">
                        {course.eligibility.quizQuestions[currentQuestion].question}
                      </p>
                      <div className="flex gap-4">
                        <Button
                          onClick={() => handleAnswer(true)}
                          className="flex-1 bg-gradient-to-r from-primary to-accent text-white rounded-2xl py-3 hover:scale-105 transition-transform"
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => handleAnswer(false)}
                          className="flex-1 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl py-3 hover:scale-105 transition-transform"
                        >
                          No
                        </Button>
                      </div>
                      <p className="text-white/40 text-sm mt-6 text-center">
                        {currentQuestion + 1} of {course.eligibility.quizQuestions.length}
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
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                          >
                            <Check className="w-10 h-10 text-white" />
                          </motion.div>
                          <h4 className="text-2xl font-bold text-emerald-400 mb-2">You're eligible! 🎉</h4>
                          <p className="text-white/70 mb-8">Great news! You meet all the requirements.</p>
                          <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-2xl py-3 shadow-lg">
                            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                            <HelpCircle className="w-10 h-10 text-amber-400" />
                          </div>
                          <h4 className="text-xl font-bold text-amber-400 mb-2">You may still qualify</h4>
                          <p className="text-white/70 mb-8">Speak to our admissions team to explore your options.</p>
                          <Button asChild className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl py-3">
                            <Link to="/contact-us">Contact Admissions</Link>
                          </Button>
                        </>
                      )}
                      <button onClick={resetQuiz} className="mt-6 text-white/50 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto transition-colors">
                        <RefreshCw className="w-4 h-4" /> Try Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
