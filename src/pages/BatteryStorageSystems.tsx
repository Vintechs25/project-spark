import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Battery, Zap, Shield, Clock, Home, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import inverterImage from "@/assets/real-projects/huawei-inverter.jpeg";
import inverterImage2 from "@/assets/real-projects/huawei-inverter-2.jpeg";

const benefits = [
  {
    icon: Zap,
    title: "Backup Power 24/7",
    description: "Never experience blackouts again. Battery storage keeps your home or business running during KPLC outages."
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Store solar energy during the day and use it at night. Reduce reliance on the grid completely."
  },
  {
    icon: Clock,
    title: "Peak Shaving",
    description: "Use stored energy during peak hours when electricity rates are highest, maximizing your savings."
  },
  {
    icon: Battery,
    title: "Long Lifespan",
    description: "Modern lithium batteries last 10-15 years with thousands of charge cycles, offering excellent value."
  }
];

const systems = [
  {
    title: "Home Battery Systems",
    capacity: "5kWh - 20kWh",
    icon: Home,
    description: "Perfect for residential backup power and solar storage.",
    features: ["Lithium-ion technology", "Smart energy management", "Mobile app monitoring", "Seamless switchover"]
  },
  {
    title: "Commercial Battery Systems",
    capacity: "50kWh - 500kWh+",
    icon: Building2,
    description: "Industrial-grade storage for businesses and institutions.",
    features: ["Modular & scalable", "Peak demand reduction", "Grid services capable", "Advanced BMS"]
  }
];

const brands = ["Huawei", "Tesla Powerwall", "Pylontech", "BYD", "Victron Energy"];

const faqs = [
  {
    question: "How much does battery storage cost in Kenya?",
    answer: "Battery storage systems in Kenya range from KES 200,000 for a basic 5kWh system to KES 2,000,000+ for larger commercial installations. The cost depends on capacity, brand, and whether it's integrated with solar panels. We offer flexible financing options."
  },
  {
    question: "How long can a battery power my home during an outage?",
    answer: "A 10kWh battery can typically power essential loads (lights, fridge, TV, phone charging) for 8-12 hours. For whole-home backup, you may need 15-20kWh or more. We analyze your consumption to recommend the right size."
  },
  {
    question: "Can I add batteries to my existing solar system?",
    answer: "Yes! We specialize in retrofitting battery storage to existing solar installations. Most systems can be upgraded to include battery storage, though the inverter may need to be replaced with a hybrid unit."
  },
  {
    question: "What's the difference between lead-acid and lithium batteries?",
    answer: "Lithium batteries are more expensive upfront but offer 3-4x longer lifespan, deeper discharge capability (up to 90% vs 50%), faster charging, and require no maintenance. For most applications, lithium is the better long-term investment."
  }
];

const BatteryStorageSystems = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={inverterImage}
              alt="Battery storage system installation in Kenya"
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                Never Lose Power Again
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Battery Storage Systems Kenya
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Store solar energy for use at night or during power outages. Premium battery backup solutions for homes and businesses across Kenya.
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
                Why Add Battery Storage?
              </h2>
              <p className="text-lg text-muted-foreground">
                With Kenya's frequent power outages and rising electricity costs, battery storage is becoming essential for reliable, affordable power.
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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
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

        {/* Systems Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Battery Storage Solutions
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {systems.map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-card bg-card overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center flex-shrink-0">
                          <system.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">{system.capacity}</div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{system.title}</h3>
                          <p className="text-muted-foreground">{system.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-foreground">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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

        {/* Brands Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-secondary-foreground mb-8">Trusted Battery Brands We Install</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {brands.map((brand, index) => (
                  <span key={index} className="text-secondary-foreground/70 font-medium text-lg">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={inverterImage} alt="Huawei inverter installation" className="w-full h-72 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={inverterImage2} alt="Battery system installation" className="w-full h-72 object-cover" />
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
              <Battery className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Power Your Independence
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a customized battery storage solution for your home or business.
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

export default BatteryStorageSystems;
