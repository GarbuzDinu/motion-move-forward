import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At 4Motion Recovery, we combine professionalism with medical innovation 
              to provide each patient with an efficient, safe, and comfortable recovery process.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of orthopedic and sports medicine specialists work alongside 
              dedicated therapists to create treatment plans tailored to your unique needs.
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
                    Patient-Centered Care
                  </h3>
                  <p className="text-muted-foreground">
                    Every treatment plan is personalized to your specific needs and recovery goals
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
                    Expert Team
                  </h3>
                  <p className="text-muted-foreground">
                    Orthopedic specialists and experienced therapists dedicated to your recovery
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
                    Modern Facilities
                  </h3>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment and advanced procedures in a comfortable environment
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
