import { Card } from "@/components/ui/card";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Ce afecțiuni tratăm?",
    answer:
      "În cadrul cabinetului nostru oferim evaluare și recuperare funcțională pentru o gamă extinsă de afecțiuni musculo-scheletale și neurologice. Intervenim atât în leziuni acute — precum entorse, luxații, rupturi ligamentare sau tendinite — cât și în disfuncții cronice, inclusiv posturale, precum platfusul, deformările piciorului, dezechilibre musculare sau orice tip de rigiditate articulară ori musculară. Asigurăm programe de recuperare postoperatorie, adaptate fiecărui stadiu de vindecare, și intervenții orientate spre prevenție, adresate persoanelor care doresc să reducă riscul de accidentare și să își optimizeze funcționalitatea generală. Abordarea noastră integrează principii de kinetoterapie și fizioterapie moderne, cu obiectivul de a restabili mobilitatea, forța și calitatea mișcării.",
  },
  {
    question: "Dacă lucrăm cu casa de asigurări?",
    answer:
      "Nu colaborăm cu Casa Națională de Asigurări de Sănătate. Totuși, putem emite facturi pentru servicii medicale, inclusiv pentru proceduri de kinetoterapie și fizioterapie, în vederea decontării prin polițe de asigurare privată, în funcție de condițiile prevăzute de asiguratorul pacientului.",
  },
  {
    question: "Dacă lucrăm cu copii?",
    answer:
      "Da, lucrăm cu copii, cu condiția ca aceștia să fie suficient de mari pentru a participa la ședințele de recuperare fără prezența părintelui în sala de terapie. Nu preluăm sugari sau copii foarte mici (în jurul vârstei de 5 ani sau mai mici), deoarece dinamica ședințelor necesită independență și cooperare directă între terapeut și pacient, pentru a asigura eficiența programului de recuperare.",
  },
  {
    question: "Avem nevoie de trimitere sau recomandare de la medic?",
    answer:
      "Pentru a iniția în mod corect orice program de recuperare, este esențial să existe un diagnostic precis. Avem nevoie fie de un RMN, fie de o evaluare realizată de un medic specialist — de recuperare medicală sau ortoped — pentru a stabili cu exactitate afecțiunea și pentru a structura intervenția terapeutică în deplină siguranță. În cazul în care pacientul nu dispune de aceste documente, colaborăm cu medici ortopezi, specialiști în traumatologie și recuperare sportivă, disponibili în cadrul cabinetului nostru, astfel încât procesul de evaluare să poată fi realizat fără dificultăți.",
  },
  {
    question: "Cum decurge o ședință la voi?",
    answer:
      "O ședință în cadrul cabinetului nostru durează aproximativ o oră și se desfășoară exclusiv individual, în regim unu-la-unu, fără sesiuni de grup. Programul combină, în funcție de necesitățile pacientului, proceduri de fizioterapie și exerciții de kinetoterapie, fiecare etapă fiind supravegheată atent de terapeut. Dispunem de echipamente complete pentru gimnastică medicală — benzi elastice, biciclete, TRX, rower, spaliere și alte dispozitive funcționale — precum și de aparatură modernă de fizioterapie, precum laser, tecar, electroterapie sau crioterapie. Pacientului nu îi rămâne decât să se prezinte la cabinet, iar noi ne ocupăm de structura și implementarea întregului program de recuperare.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intreabari frecevente
          </h2>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center justify-between">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
