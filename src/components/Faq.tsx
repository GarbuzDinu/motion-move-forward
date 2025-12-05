import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const faqsData = [
  {
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    question: "faq.q5",
    answer: "faq.a5",
  },
];

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("faq.title")}
          </h2>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {faqsData.map((faq, index) => (
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
                    {t(faq.question)}
                  </h3>
                  <p className="text-muted-foreground">{t(faq.answer)}</p>
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
