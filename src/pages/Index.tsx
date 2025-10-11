import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Mission />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 4Motion Recovery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
