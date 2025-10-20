import { Card } from "@/components/ui/card";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What conditions do you treat?",
    answer:
      "We specialize in orthopedic and sports medicine recovery, including post-surgical rehab, joint pain, and athletic injuries.",
  },
  {
    question: "Do I need a referral to start treatment?",
    answer:
      "No referral is necessary. You can book a consultation directly with our specialists to begin your recovery journey.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your ID, insurance information, and any medical documents relevant to your condition (e.g. imaging or physician notes).",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance providers. Contact us to confirm coverage and eligibility for your treatment.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Got questions? We’ve got answers. Here are some of the most common things we get asked about our recovery process and services.
          </p>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center justify-between">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
