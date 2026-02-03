import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@techlamtechnologies.com",
    href: "mailto:info@techlamtechnologies.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empower Your <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us at Techlam Technologies for innovative renewable energy solutions that reduce costs and enhance sustainability for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl bg-muted overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585440578!2d36.68258752925049!3d-1.3028617910509955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techlam Technologies Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl shadow-elevated p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Request a Quote
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-muted border-0 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-muted border-0 focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 bg-muted border-0 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] bg-muted border-0 focus:ring-2 focus:ring-primary resize-none"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity text-lg h-14"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
