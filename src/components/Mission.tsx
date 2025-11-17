import { Card, CardContent } from "@/components/ui/card";
import { MISSION_SECTIONS } from "@/data/mission";

const Mission = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISSION_SECTIONS.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border/50 hover:border-primary/30 text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 md:p-10">
                  {/* Circular Icon */}
                  <div className="mx-auto w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-all">
                    <Icon className="text-primary" size={48} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#E8632F]">
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.description}
                  </p>

                  {/* Read More Link */}
                  
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
