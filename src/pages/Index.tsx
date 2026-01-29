import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Procedures from "@/components/Procedures";
import ReactGA from "react-ga4";

ReactGA.initialize("G-XGZ47M2Q0V");


const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <Mission />
      {/* <Procedures /> */}
      <Faq />
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 4Motion Recovery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
