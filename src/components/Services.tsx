import { Card, CardContent } from "@/components/ui/card";
import { Waves, Snowflake, Zap, Syringe, Activity, Users } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Hyperbaric Chamber",
    description: "Advanced oxygen therapy to accelerate healing and reduce inflammation",
  },
  {
    icon: Snowflake,
    title: "Cryosauna",
    description: "Whole-body cryotherapy for pain relief and faster recovery",
  },
  {
    icon: Zap,
    title: "TECAR Therapy",
    description: "State-of-the-art radiofrequency treatment for deep tissue healing",
  },
  {
    icon: Syringe,
    title: "Infiltrations",
    description: "Precise therapeutic injections by orthopedic specialists",
  },
  {
    icon: Activity,
    title: "Electrotherapy",
    description: "Advanced electrical stimulation for muscle recovery and pain management",
  },
  {
    icon: Users,
    title: "One-on-One Therapy",
    description: "Personalized kinesiotherapy and physiotherapy sessions",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology and personalized care for your complete recovery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
