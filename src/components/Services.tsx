import { Card, CardContent } from "@/components/ui/card";
import { Activity, Users, Microscope, Heart, Brain, Stethoscope } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive healthcare for all ages with personalized treatment plans and preventive care.",
    image: service1,
  },
  {
    icon: Users,
    title: "Specialist Consultations",
    description: "Expert consultations across multiple specialties with experienced medical professionals.",
    image: service2,
  },
  {
    icon: Microscope,
    title: "Diagnostic Services",
    description: "State-of-the-art diagnostic facilities with advanced imaging and laboratory services.",
    image: service3,
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Complete cardiac care including prevention, diagnosis, and treatment of heart conditions.",
    image: service1,
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Advanced neurological care for disorders of the brain, spine, and nervous system.",
    image: service2,
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and critical care capabilities.",
    image: service3,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical services tailored to meet your healthcare needs with excellence and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border/50 hover:border-primary/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-lg">
                    <Icon size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
