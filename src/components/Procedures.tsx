import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const procedures = [
  {
    title: "Cold Compression Therapy",
    videoUrl: "https://www.youtube.com/embed/FILL_THIS_IN_1",
    description:
      "Cold compression helps reduce pain and swelling by combining cold temperatures with controlled compression. It’s particularly effective for post-operative recovery and acute injuries.",
  },
  {
    title: "Normatec Compression",
    videoUrl: "https://www.youtube.com/embed/FILL_THIS_IN_2",
    description:
      "Normatec recovery systems use dynamic air compression to improve circulation, reduce muscle soreness, and speed up recovery — ideal for athletes and post-rehab patients.",
  },
  {
    title: "Red Light Therapy",
    videoUrl: "https://www.youtube.com/embed/FILL_THIS_IN_3",
    description:
      "Red light therapy promotes healing and reduces inflammation at the cellular level. It is used for chronic pain, joint conditions, and tissue repair.",
  },
  {
    title: "Ultrasound Therapy",
    videoUrl: "https://www.youtube.com/embed/FILL_THIS_IN_4",
    description:
      "Ultrasound therapy is a non-invasive technique that uses sound waves to reduce pain and promote soft tissue healing.",
  },
];

const TherapeuticProcedures = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Therapeutic Procedures
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Explore the advanced therapeutic treatments we use to enhance recovery and improve patient outcomes. Each procedure is evidence-based and guided by expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {procedures.map((item, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <PlayCircle className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="w-full">
                  <div className="aspect-video rounded-md overflow-hidden shadow-md">
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticProcedures;
