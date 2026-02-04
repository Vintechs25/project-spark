import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Droplets, Thermometer, Home, Building2, CheckCircle, ArrowRight, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import waterHeaterImage from "@/assets/real-projects/dayliff-ultra-sun-heater.jpeg";
import domesticHeater from "@/assets/real-projects/domestic-solar-water-heater.jpeg";
import teamInstall from "@/assets/real-projects/team-water-heater-install.jpeg";

const benefits = [
  {
    icon: Thermometer,
    title: "Hot Water 24/7",
    description: "Solar water heaters store hot water in insulated tanks, ensuring you have hot water even at night or on cloudy days."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint. Solar water heating is one of the greenest ways to heat water for your home."
  },
  {
    icon: Clock,
    title: "Low Maintenance",
    description: "Modern solar water heaters require minimal maintenance and last 15-20 years with proper care."
  },
  {
    icon: Droplets,
    title: "Save on Bills",
    description: "Cut your water heating costs by up to 70%. No more expensive electric or gas water heating bills."
  }
];

const products = [
  {
    title: "Flat Plate Collectors",
    capacity: "150L - 300L",
    description: "Ideal for households of 2-6 people. Durable design suitable for Kenya's climate.",
    features: ["Copper absorber plates", "Tempered glass cover", "Pressurized system", "5-year warranty"]
  },
  {
    title: "Evacuated Tube Collectors",
    capacity: "200L - 500L",
    description: "Higher efficiency for larger families and commercial applications.",
    features: ["Vacuum insulation", "Works in cooler weather", "Higher efficiency", "7-year warranty"]
  },
  {
    title: "Heat Pump Systems",
    capacity: "150L - 1000L",
    description: "Hybrid systems for maximum efficiency and reliability.",
    features: ["Works day and night", "Electric backup", "Commercial grade", "10-year warranty"]
  }
];

const faqs = [
  {
    question: "How much does a solar water heater cost in Kenya?",
    answer: "Solar water heaters in Kenya range from KES 45,000 for a basic 100L system to KES 250,000+ for larger 500L commercial systems. The price depends on capacity, brand, and installation complexity. We offer systems from trusted brands like Dayliff and Rheem."
  },
  {
    question: "How long does it take to heat water with a solar water heater?",
    answer: "On a sunny day in Kenya, a solar water heater can heat water to 60-80°C within 4-6 hours. The insulated tank keeps water hot for 24-48 hours, so you'll have hot water available even in the morning after overnight storage."
  },
  {
    question: "Do solar water heaters work during the rainy season?",
    answer: "Yes! While efficiency is reduced on cloudy days, our systems still heat water. Most systems include an electric backup element for extended cloudy periods. In Kenya's climate, solar contribution remains high year-round."
  },
  {
    question: "What size solar water heater do I need?",
    answer: "As a guide: 100-150L for 1-2 people, 200L for 3-4 people, 300L for 5-6 people, and 400L+ for larger families or commercial use. We assess your specific hot water usage to recommend the optimal size."
  }
];

const SolarWaterHeaters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={waterHeaterImage}
              alt="Solar water heater installation in Kenya"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
                Kenya's Leading Solar Water Heater Supplier
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Solar Water Heaters Kenya
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Enjoy endless hot water powered by Kenya's abundant sunshine. Professional installation of premium solar water heating systems for homes, hotels, hospitals and schools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                  asChild
                >
                  <a href="#contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+254700000000">Call Now</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Solar Water Heating?
              </h2>
              <p className="text-lg text-muted-foreground">
                Solar water heaters are the most cost-effective way to heat water in Kenya. Harness free energy from the sun and enjoy significant savings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-card hover:shadow-elevated transition-all bg-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Solar Water Heater Systems
              </h2>
              <p className="text-lg text-muted-foreground">
                We supply and install various types of solar water heaters to match your needs and budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-card bg-card">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-accent mb-2">{product.capacity}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Our Solar Water Heater Installations
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={waterHeaterImage} alt="Dayliff solar water heater" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={domesticHeater} alt="Domestic solar water heater installation" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={teamInstall} alt="Team installing solar water heater" className="w-full h-64 object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-0 shadow-card bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Droplets className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Start Saving on Hot Water Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free site assessment and quote for your solar water heater installation.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Get Free Quote</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarWaterHeaters;
