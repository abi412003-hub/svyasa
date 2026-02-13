import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/data/trainingData";

const TrainingFAQs = () => (
  <>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-xs mb-3">
          <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; FAQs
        </p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
          Frequently Asked Questions
        </motion.h1>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {faqData.map((section, si) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.1 }}
            className="mb-10"
          >
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">{section.category}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.questions.map((faq, fi) => (
                <AccordionItem key={fi} value={`${si}-${fi}`} className="bg-card rounded-lg border border-border/50">
                  <AccordionTrigger className="px-5 py-3 text-sm text-left hover:no-underline font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default TrainingFAQs;
