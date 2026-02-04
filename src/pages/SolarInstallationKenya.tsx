import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sun, Battery, Home, Building2, Shield, TrendingDown, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import solarRooftop from "@/assets/real-projects/large-rooftop-installation.jpeg";
import commercialPanels from "@/assets/real-projects/commercial-rooftop-panels.jpeg";
import inverterImage from "@/assets/real-projects/huawei-inverter.jpeg";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Electricity Bills by 80%",
    description: "Stop paying excessive KPLC bills. Solar power generates free electricity from sunlight, drastically cutting your monthly expenses."
  },
  {
    icon: Shield,
    title: "25-Year Panel Warranty",
    description: "Our Tier-1 solar panels come with industry-leading warranties. Enjoy decades of reliable, maintenance-free energy production."
  },
  {
    icon: Battery,
    title: "Battery Backup Available",
    description: "Never worry about power outages again. Our battery storage systems keep your home or business running 24/7."
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Professional installation completed within 1-3 days for residential systems. Minimal disruption to your daily routine."
  }
];

const systemTypes = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Perfect for homes and apartments. Systems from 3kW to 15kW to match your household consumption.",
    features: ["Roof-mounted panels", "Hybrid inverters", "Optional battery storage", "Net metering ready"]
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Tailored solutions for offices, factories, schools and institutions. Systems from 20kW to 500kW+.",
    features: ["Large-scale installations", "Industrial-grade equipment", "Energy monitoring systems", "Maintenance contracts"]
  }
];

const process = [
  { step: "1", title: "Free Consultation", description: "We assess your energy needs and site conditions" },
  { step: "2", title: "Custom Design", description: "Our engineers design the optimal system for you" },
  { step: "3", title: "Professional Install", description: "Certified technicians install your system" },
  { step: "4", title: "Ongoing Support", description: "24/7 monitoring and maintenance support" }
];

const faqs = [
  {
    question: "How much does solar installation cost in Kenya?",
    answer: "Solar installation costs depend on your energy consumption, roof type, and whether you need battery storage. We offer friendly, competitive pricing with free site assessments and flexible financing options to fit your budget."
  },
  {
    question: "How many solar panels do I need for my home?",
    answer: "For a typical 3-bedroom house in Kenya consuming 300-500 kWh per month, you'll need a 3-5kW system, which translates to 8-15 solar panels depending on panel wattage. We analyze your KPLC bills to determine the exact requirement."
  },
  {
    question: "Do solar panels work during cloudy days or rainy seasons?",
    answer: "Yes! Modern solar panels still generate electricity on cloudy days, though at reduced capacity (10-25% of peak). In Kenya, even during the rainy season, there's sufficient sunlight for meaningful solar generation. Battery storage ensures you have power when the sun isn't shining."
  },
  {
    question: "What is net metering and is it available in Kenya?",
    answer: "Net metering allows you to sell excess solar electricity back to KPLC. Kenya Power offers net metering for solar systems, meaning your meter runs backwards when you export power, reducing your bills further. We handle all the paperwork for net metering applications."
  },
  {
    question: "How long do solar panels last?",
    answer: "Quality solar panels last 25-30 years with minimal degradation (less than 0.5% per year). Our Tier-1 panels come with 25-year performance warranties. Inverters typically last 10-15 years, and batteries 10-15 years depending on usage."
  }
];

const SolarInstallationKenya = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={solarRooftop}
              alt="Solar panel installation on rooftop in Kenya"
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
                #1 Rated Solar Company in Kenya
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Professional Solar Panel Installation in Kenya
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Join 500+ Kenyan homes and businesses saving up to 80% on electricity bills. Expert installation, premium equipment, and lifetime support from Techlam Energy.
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
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
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
                Why Choose Solar Energy in Kenya?
              </h2>
              <p className="text-lg text-muted-foreground">
                Kenya enjoys over 300 sunny days per year, making it one of the best locations for solar power in Africa. Here's why thousands are switching to solar.
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

        {/* System Types */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Solar Solutions for Every Need
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a homeowner looking to cut bills or a business seeking energy independence, we have the right solution.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {systemTypes.map((system, index) => (
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

        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Our Installation Process
              </h2>
              <p className="text-lg text-secondary-foreground/70">
                From initial consultation to final handover, we make going solar simple and hassle-free.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Solar Installations in Kenya
              </h2>
              <p className="text-lg text-muted-foreground">
                Real projects completed for homes, schools, hospitals and businesses across Kenya.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={solarRooftop} alt="Large rooftop solar installation in Kenya" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={commercialPanels} alt="Commercial solar panels installation" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-card"
              >
                <img src={inverterImage} alt="Huawei solar inverter installation" className="w-full h-64 object-cover" />
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
                Frequently Asked Questions About Solar in Kenya
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
              <Sun className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Go Solar?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free consultation and customized quote for your home or business. Our solar experts are ready to help you start saving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <a href="#contact">Get Free Quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+254700000000">+254 700 000 000</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarInstallationKenya;
