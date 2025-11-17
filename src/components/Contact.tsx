import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_EMAIL, OFFICES } from "@/data/contact-info";

interface FormErrors {
  full_name?: string[];
  email?: string[];
  phone?: string[];
  message?: string[];
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = ["The full name field is required."];
    }

    if (!formData.email.trim()) {
      newErrors.email = ["The email field is required."];
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = ["The email field must be a valid email address."];
    }

    if (!formData.message.trim()) {
      newErrors.message = ["The message field is required."];
    }

    if (formData.phone) {
      const phonePattern = /^[\d\s()+-]+$/;
      if (formData.phone.length < 6 || formData.phone.length > 30) {
        newErrors.phone = ["The phone field must be between 6 and 30 characters."];
      } else if (!phonePattern.test(formData.phone)) {
        newErrors.phone = ["The phone field format is invalid."];
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://events.intermarkfileup.com/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
          variant: "success",
        });
        setFormData({ full_name: "", email: "", phone: "", message: "" });
        setErrors({});
        console.log("Contact created:", data);
      } else if (response.status === 422) {
        setErrors(data.errors || {});
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      } else if (response.status === 500) {
        console.error("Server error:", data);
        toast({
          title: "Server Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast({
        title: "Connection Error",
        description: "Unable to reach the server. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
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

            <Card className="border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Regional Offices</h3>
                    <div className="space-y-6 text-muted-foreground">
                      {OFFICES.map((office) => (
                        <div key={`office-${office.name}`}>
                          <p className="font-semibold text-foreground">{office.name}</p>
                          <div className="flex items-start space-x-3 mt-2">
                            <MapPin className="text-primary mt-1" size={18} />
                            <p>{office.address}</p>
                          </div>
                          <div className="flex items-start space-x-3 mt-2">
                            <Phone className="text-primary mt-1" size={18} />
                            <ul>
                              {office.phone.map((line) => (
                                <li key={`${office.name}-${line}`}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className={`w-full ${errors.full_name ? "border-destructive" : ""}`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.full_name && <p className="text-sm text-destructive mt-1">{errors.full_name[0]}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${errors.email ? "border-destructive" : ""}`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email[0]}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full ${errors.phone ? "border-destructive" : ""}`}
                    placeholder="+1 (555) 000-0000"
                    disabled={isSubmitting}
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone[0]}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full min-h-32 ${errors.message ? "border-destructive" : ""}`}
                    placeholder="How can we help you?"
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message[0]}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
