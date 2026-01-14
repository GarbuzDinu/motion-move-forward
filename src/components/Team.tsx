import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stethoscope, Activity } from "lucide-react";
import AVImage from "@/assets/AdrianVasile.jpg";
import BRImage from "@/assets/BoraRazvan.jpg";
import { useTranslation } from "react-i18next";
import teamBg from "@/assets/team.jpg"; // or another image

const teamMembersData = [
  {
    name: "team.adrian.name",
    role: "team.adrian.role",
    specialization: "team.adrian.specialization",
    description: "team.adrian.description",
    icon: Stethoscope,
    image: AVImage,
    initials: "AV",
  },
  {
    name: "team.bora.name",
    role: "team.bora.role",
    specialization: "team.bora.specialization",
    description: "team.bora.description",
    icon: Activity,
    image: BRImage,
    initials: "BR",
  },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="py-4 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="relative mb-20 rounded-2xl overflow-hidden animate-fade-in">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url(${teamBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-48 px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("team.title")}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t("team.description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembersData.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-8">
                    <div className="relative rounded-full p-[4px] bg-gradient-to-br from-primary to-secondary">
                      <Avatar className="h-44 w-44 rounded-full border-4 border-card overflow-hidden">
                        <AvatarImage
                          src={member.image}
                          alt={t(member.name)}
                          className="object-cover w-full h-full"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-3xl font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {t(member.name)}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {t(member.role)}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <IconComponent className="w-6 h-6" />
                    <span className="text-base font-medium">
                      {t(member.specialization)}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {t(member.description)}
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

export default Team;
