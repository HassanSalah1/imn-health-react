import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-primary" size={32} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                IMN Health
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Delivering exceptional healthcare services with compassion and cutting-edge technology. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
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
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>+1 (555) 123-4567</li>
              <li>info@imnhealth.com</li>
              <li>123 Healthcare Avenue</li>
              <li>Medical District, MD 12345</li>
            </ul>
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
