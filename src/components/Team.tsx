import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stethoscope, Activity } from "lucide-react";
import AVImage from "@/assets/AdrianVasile.jpg";
import BRImage from "@/assets/BoraRazvan.jpg";

const teamMembers = [
  {
    name: "Dr. Adrian Vasile",
    role: "Medical Director",
    specialization: "Orthopedic Specialist",
    description:
      "Over 15 years of experience in orthopedic medicine and sports injury recovery.",
    icon: Stethoscope,
    image: AVImage, // ✅ correct usage
    initials: "AV",
  },
  {
    name: "Dr. Bora Razvan",
    role: "Sports Medicine Specialist",
    specialization: "Athletic Recovery Expert",
    description:
      "Dedicated to helping athletes return to peak performance through innovative treatments.",
    icon: Activity,
    image: BRImage, // ✅ correct usage
    initials: "BR",
  },
];

const Team = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Faceți cunoștință cu echipa noastră de experți
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesioniștii noștri dedicați combină anii de experiență cu cele
            mai recente inovații medicale pentru a vă oferi îngrijire
            excepțională și tratament personalizat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => {
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
                          alt={member.name}
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
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <IconComponent className="w-6 h-6" />
                    <span className="text-base font-medium">
                      {member.specialization}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {member.description}
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
