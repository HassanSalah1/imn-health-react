import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_FEATURES } from "@/data/about";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose IMN Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over 25 years of excellence in healthcare, we combine cutting-edge medical technology with compassionate care to deliver exceptional outcomes for our patients.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art facilities and dedicated team of healthcare professionals are committed to providing you with the highest quality medical services in a comfortable and welcoming environment.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <span className="text-muted-foreground font-semibold">Trusted by thousands</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
