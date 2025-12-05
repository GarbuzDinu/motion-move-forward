import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  { service: "EVALUARE", duration: "20-50 min", price: "200 lei" },
  { service: "CONSULT MEDICAL", duration: "20-50 min", price: "300 lei" },
  { service: "ȘEDINȚĂ FIZIOTERAPIE", duration: "50 MINUTE", price: "300 LEI" },
  { service: "ȘEDINȚĂ KINETOTERAPIE", duration: "50 MINUTE", price: "300 LEI" },
  { service: "MASAJ SPORTIV", duration: "50 MINUTE", price: "350 LEI" },
  { service: "ȘEDINȚĂ CRIOSAUNĂ", duration: "-", price: "300 LEI" },
  { service: "ȘEDINȚĂ BOOTS", duration: "30 MINUTE", price: "150 LEI" },
  { service: "ȘEDINȚĂ CAMERA HIPERBARA", duration: "30-60 min", price: "250 lei" },
];

const orthoServices = [
  { service: "Consult medic", duration: "20/50m", price: "300 lei" },
  { service: "Reconsult", duration: "-", price: "150 lei" },
  { service: "Montare atela membru superior", duration: "-", price: "200" },
  { service: "Montare atela membru inferior", duration: "-", price: "250" },
  { service: "Montare ghips circular", duration: "-", price: "260" },
  { service: "Montare fasa elastica", duration: "-", price: "100" },
  { service: "Montare bandaj universal", duration: "-", price: "200" },
  { service: "Ablatie fire sutura", duration: "-", price: "200" },
  { service: "Montare pansament", duration: "-", price: "100" },
  { service: "Suprimare ghips", duration: "-", price: "150" },
  { service: "Infiltratie vascoelastica (genunchi, umar, sold)", duration: "-", price: "1700 lei" },
  { service: "Infiltratie PRP (plasma imbogatita in trombocite)", duration: "-", price: "1700" },
];

const subscriptions = [
  { title: "ABONAMENT 10 ȘEDINȚE MASAJ SPORTIV*", price: "2.975 LEI", note: "discount 15% inclus" },
  { title: "ABONAMENT 10 ȘEDINȚE KINETOTERAPIE + FIZIOTERAPIE*", price: "5100 LEI", note: "discount 15% inclus" },
  { title: "ABONAMENT 10 ȘEDINȚE CRIOSAUNĂ*", price: "2.850 LEI", note: "discount 5% inclus" },
  { title: "ABONAMENT 10 ȘEDINȚE KINETOTERAPIE + FIZIOTERAPIE + CRIOSAUNĂ*", price: "6.975 LEI", note: "discount 22.5% inclus" },
  { title: "ABONAMENT 10 ȘEDINȚE CAMERA HIPERBARA", price: "2.000 lei", note: "Discount 20% inclus" },
];

export default function Prices() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            LISTĂ PREȚURI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tarife pentru serviciile noastre medicale, fizioterapie, kinetoterapie și abonamente speciale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Services Card */}
          <Card className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-bold text-foreground">Servicii</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between px-4 py-2 bg-muted/10 rounded-md hover:bg-muted/20 transition"
                >
                  <span>{s.service}</span>
                  <span>{s.duration}</span>
                  <span className="font-semibold">{s.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ortho Services Card */}
          <Card className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-bold text-foreground">Medicină / Ortopedie</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {orthoServices.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between px-4 py-2 bg-muted/10 rounded-md hover:bg-muted/20 transition"
                >
                  <span>{s.service}</span>
                  <span>{s.duration}</span>
                  <span className="font-semibold">{s.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Subscriptions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {subscriptions.map((sub, i) => (
            <Card
              key={i}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-border/50 bg-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-foreground">{sub.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-semibold text-primary">{sub.price}</p>
                <p className="text-muted-foreground italic mt-2">{sub.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center italic text-sm text-muted-foreground">
          Programarea se face cu cel puțin 4 ore înainte iar anularea cu minim 4 ore, altfel se consideră efectuată.
        </p>
      </div>
    </section>
  );
}
