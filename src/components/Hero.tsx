import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto font-light">
          {t("hero.subtitle")}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
            >
              {t("hero.bookConsultation")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              {t("hero.learnMore")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
