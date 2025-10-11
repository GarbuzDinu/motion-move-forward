import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stethoscope, Heart, Activity, UserRound, Zap, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alexandru Popescu",
    role: "Medical Director",
    specialization: "Orthopedic Specialist",
    description: "Over 15 years of experience in orthopedic medicine and sports injury recovery.",
    icon: Stethoscope,
    image: "/placeholder.svg",
    initials: "AP"
  },
  {
    name: "Dr. Maria Ionescu",
    role: "Sports Medicine Specialist",
    specialization: "Athletic Recovery Expert",
    description: "Dedicated to helping athletes return to peak performance through innovative treatments.",
    icon: Activity,
    image: "/placeholder.svg",
    initials: "MI"
  },
  {
    name: "Laura Gheorghe",
    role: "Head Physiotherapist",
    specialization: "Physical Therapy",
    description: "Expert in one-on-one therapy sessions tailored to each patient's unique needs.",
    icon: Heart,
    image: "/placeholder.svg",
    initials: "LG"
  },
  {
    name: "Andrei Dumitru",
    role: "Kinesiotherapy Specialist",
    specialization: "Movement & Mobility",
    description: "Specializes in restoring mobility and reducing pain through targeted exercises.",
    icon: Users,
    image: "/placeholder.svg",
    initials: "AD"
  },
  {
    name: "Elena Cristea",
    role: "Recovery Therapist",
    specialization: "Advanced Equipment",
    description: "Manages cutting-edge recovery technology including hyperbaric chamber and cryosauna.",
    icon: Zap,
    image: "/placeholder.svg",
    initials: "EC"
  },
  {
    name: "Dr. Mihai Stanciu",
    role: "Infiltration Specialist",
    specialization: "Advanced Procedures",
    description: "Performs precise infiltrations and modern recovery procedures with expertise.",
    icon: UserRound,
    image: "/placeholder.svg",
    initials: "MS"
  }
];

const Team = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated professionals combine years of experience with the latest medical innovations
            to provide you with exceptional care and personalized treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <Avatar className="h-24 w-24 relative border-4 border-card">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-xl font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm font-medium">{member.specialization}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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