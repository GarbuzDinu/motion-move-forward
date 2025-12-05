import { Card, CardContent } from "@/components/ui/card";
import { Waves, Snowflake, Zap, Syringe, Activity, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    icon: Waves,
    title: "services.hyperbaric.title",
    description: "services.hyperbaric.description",
  },
  {
    icon: Snowflake,
    title: "services.cryosauna.title",
    description: "services.cryosauna.description",
  },
  {
    icon: Zap,
    title: "services.tecar.title",
    description: "services.tecar.description",
  },
  {
    icon: Syringe,
    title: "services.infiltrations.title",
    description: "services.infiltrations.description",
  },
  {
    icon: Activity,
    title: "services.electrotherapy.title",
    description: "services.electrotherapy.description",
  },
  {
    icon: Users,
    title: "services.oneonone.title",
    description: "services.oneonone.description",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
