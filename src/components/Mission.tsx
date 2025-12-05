import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("mission.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("mission.description")}
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 border-l-4 border-l-primary shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {t("mission.cards.patientCentered.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("mission.cards.patientCentered.description")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {t("mission.cards.expertTeam.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("mission.cards.expertTeam.description")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {t("mission.cards.modernFacilities.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("mission.cards.modernFacilities.description")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
