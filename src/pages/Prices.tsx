import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import cabImage from "@/assets/cab.jpg";

const servicesData = [
  {
    service: "prices.services.evaluation",
    duration: "20-50 min",
    price: "200 lei",
  },
  {
    service: "prices.services.medicalConsult",
    duration: "20-50 min",
    price: "300 lei",
  },
  {
    service: "prices.services.physiotherapy",
    duration: "50 MINUTE",
    price: "300 LEI",
  },
  {
    service: "prices.services.kinesiotherapy",
    duration: "50 MINUTE",
    price: "300 LEI",
  },
  {
    service: "prices.services.sportMassage",
    duration: "50 MINUTE",
    price: "350 LEI",
  },
  { service: "prices.services.cryosauna", duration: "-", price: "300 LEI" },
  { service: "prices.services.boots", duration: "30 MINUTE", price: "150 LEI" },
  {
    service: "prices.services.hyperbaricChamber",
    duration: "30-60 min",
    price: "250 lei",
  },
];

const orthoServicesData = [
  { service: "prices.ortho.consult", duration: "20/50m", price: "300 lei" },
  { service: "prices.ortho.reconsult", duration: "-", price: "150 lei" },
  { service: "prices.ortho.upperSplint", duration: "-", price: "200" },
  { service: "prices.ortho.lowerSplint", duration: "-", price: "250" },
  { service: "prices.ortho.circularCast", duration: "-", price: "260" },
  { service: "prices.ortho.elasticBandage", duration: "-", price: "100" },
  { service: "prices.ortho.universalBandage", duration: "-", price: "200" },
  { service: "prices.ortho.sutureRemoval", duration: "-", price: "200" },
  { service: "prices.ortho.dressing", duration: "-", price: "100" },
  { service: "prices.ortho.castRemoval", duration: "-", price: "150" },
  {
    service: "prices.ortho.vascoInfiltration",
    duration: "-",
    price: "1700 lei",
  },
  { service: "prices.ortho.prpInfiltration", duration: "-", price: "1700" },
];

const subscriptionsData = [
  {
    title: "prices.subscriptions.sportMassage10",
    price: "2.975 LEI",
    note: "prices.subscriptions.discount15",
  },
  {
    title: "prices.subscriptions.kinesiotherapy10",
    price: "5100 LEI",
    note: "prices.subscriptions.discount15",
  },
  {
    title: "prices.subscriptions.cryosauna10",
    price: "2.850 LEI",
    note: "prices.subscriptions.discount5",
  },
  {
    title: "prices.subscriptions.fullCombo10",
    price: "6.975 LEI",
    note: "prices.subscriptions.discount22_5",
  },
  {
    title: "prices.subscriptions.hyperbaric10",
    price: "2.000 lei",
    note: "prices.subscriptions.discount20",
  },
];

export default function Prices() {
  const { t } = useTranslation();

  return (
    <section className="py-4 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="relative mb-20 rounded-2xl overflow-hidden animate-fade-in">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cabImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-48 px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("prices.title")}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t("prices.description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Services Card */}
          <Card className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {t("prices.services.title")}
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {servicesData.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between px-4 py-2 bg-muted/10 rounded-md hover:bg-muted/20 transition"
                >
                  <span>{t(s.service)}</span>
                  <span>{s.duration}</span>
                  <span className="font-semibold">{s.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ortho Services Card */}
          <Card className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {t("prices.ortho.title")}
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {orthoServicesData.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between px-4 py-2 bg-muted/10 rounded-md hover:bg-muted/20 transition"
                >
                  <span>{t(s.service)}</span>
                  <span>{s.duration}</span>
                  <span className="font-semibold">{s.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Subscriptions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {subscriptionsData.map((sub, i) => (
            <Card
              key={i}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {t(sub.title)}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-semibold text-primary">
                  {sub.price}
                </p>
                <p className="text-muted-foreground italic mt-2">
                  {t(sub.note)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center italic text-sm text-muted-foreground">
          {t("prices.note")}
        </p>
      </div>
    </section>
  );
}
