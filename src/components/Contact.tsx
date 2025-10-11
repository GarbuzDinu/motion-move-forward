import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Recovery Journey
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contact us today to schedule your personalized consultation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/95 border-none shadow-card hover:shadow-card-hover transition-shadow animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/95 border-none shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
              <p className="text-muted-foreground">info@4motionrecovery.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/95 border-none shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Location</h3>
              <p className="text-muted-foreground">123 Recovery Avenue</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/95 border-none shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 8AM-8PM</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-lg"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
