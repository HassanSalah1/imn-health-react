import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/home-img-01.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medical professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="text-primary-foreground" size={32} />
            <span className="text-primary-foreground/90 font-semibold text-lg">
              Innovate. Launch. Lead.
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            IDEA TO REALITY
            {/* <br />
            <span className="text-primary-foreground/90">From Concept to Commercialization</span> */}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            The network is formed of a unique blend of companies serving healthcare products, from the very early steps of product conceptualization and initiation, moving through marketing and communication strategies, all the way till complete product commercialization and management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("services")}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 group"
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
            <div className="animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">25+</div>
              <div className="text-primary-foreground/80 mt-1">Years Experience</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50k+</div>
              <div className="text-primary-foreground/80 mt-1">Customers Served</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">98%</div>
              <div className="text-primary-foreground/80 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
