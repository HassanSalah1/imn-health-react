import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_EMAIL, OFFICES } from "@/data/contact-info";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Heart className="text-primary" size={32} /> */}
              <img src={logo} alt="IMN Health Logo" className="h-10 md:h-14 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              InterMark Network (IMN) is the first and the only fully-integrated healthcare solutions organization across the MENA region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-semibold text-lg">Regional Offices</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {OFFICES.map((office) => (
                <div
                  key={office.name}
                  className="rounded-xl border border-border/60 bg-card/60 hover:border-primary/50 transition-all p-4 space-y-3"
                >
                  <p className="font-semibold">{office.name}</p>
                  <div className="flex items-start space-x-3 text-muted-foreground">
                    <MapPin size={18} className="mt-1 text-primary" />
                    <p>{office.address}</p>
                  </div>
                  <div className="flex items-start space-x-3 text-muted-foreground">
                    <Phone size={18} className="mt-1 text-primary" />
                    <ul className="space-y-1">
                      {office.phone.map((line) => (
                        <li key={`${office.name}-${line}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <Card className="border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-medium">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} IMN Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
