import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Factory, GraduationCap, Hotel, Stethoscope, TrendingDown, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import commercialImage from "@/assets/real-projects/commercial-grid-tied-karen.jpeg";
import schoolImage from "@/assets/real-projects/school-solar-installation.jpeg";
import churchImage from "@/assets/real-projects/church-solar-installation.jpeg";
import hospitalImage from "@/assets/real-projects/solar-systems-pope-benedict.jpeg";

const sectors = [
  { icon: Factory, name: "Manufacturing", description: "Reduce operational costs with large-scale solar installations" },
  { icon: Building2, name: "Office Buildings", description: "Cut overhead and demonstrate sustainability commitment" },
  { icon: GraduationCap, name: "Schools & Universities", description: "Lower electricity bills and educate students on clean energy" },
  { icon: Hotel, name: "Hotels & Lodges", description: "Enhance guest experience while reducing energy costs" },
  { icon: Stethoscope, name: "Hospitals & Clinics", description: "Reliable backup power for critical healthcare operations" }
];

const benefits = [
  "Reduce electricity bills by 60-80%",
  "ROI typically within 3-5 years",
  "25-year panel performance warranty",
  "Net metering income from excess power",
  "Reduced carbon footprint for ESG reporting",
  "Protection against rising KPLC tariffs",
  "Low maintenance requirements",
  "Government incentives available"
];

const projects = [
  { image: commercialImage, title: "Grid-Tied System - Karen", capacity: "100kW" },
  { image: schoolImage, title: "School Installation", capacity: "50kW" },
  { image: churchImage, title: "Church Solar Project", capacity: "30kW" },
  { image: hospitalImage, title: "Hospital Solar System", capacity: "150kW" }
];

const CommercialSolarSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={commercialImage}
              alt="Commercial solar installation in Kenya"
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
                Trusted by 100+ Kenyan Businesses
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Commercial Solar Solutions Kenya
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Reduce your business electricity costs by up to 80%. Custom solar solutions for factories, offices, schools, hotels and healthcare facilities across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                  asChild
                >
                  <a href="#contact">
                    Request Site Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Tailored solar solutions for every sector. We understand the unique energy needs of different industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-card hover:shadow-elevated transition-all bg-card text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <sector.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{sector.name}</h3>
                      <p className="text-muted-foreground text-sm">{sector.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Go Solar for Your Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Commercial solar is one of the best investments a Kenyan business can make. Here's why leading companies are switching to solar power.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-elevated bg-secondary">
                  <CardContent className="p-8">
                    <TrendingDown className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                      Typical ROI: 3-5 Years
                    </h3>
                    <p className="text-secondary-foreground/70 mb-6">
                      With Kenya's high electricity costs and abundant sunshine, commercial solar pays for itself faster than most other investments.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-secondary-foreground">Average system size</span>
                        <span className="font-semibold text-secondary-foreground">50-200 kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-foreground">Monthly savings</span>
                        <span className="font-semibold text-secondary-foreground">KES 200K - 1M+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-foreground">System lifespan</span>
                        <span className="font-semibold text-secondary-foreground">25+ years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Our Commercial Projects
              </h2>
              <p className="text-lg text-secondary-foreground/70">
                Real installations for businesses, schools, hospitals and institutions across Kenya.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-card">
                    <div className="relative">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4">
                        <p className="text-primary-foreground font-semibold">{project.title}</p>
                        <p className="text-primary-foreground/70 text-sm">{project.capacity}</p>
                      </div>
                    </div>
                  </div>
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
              <BarChart3 className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Cut Your Business Energy Costs?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free site assessment and detailed ROI analysis for your commercial solar project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <a href="#contact">Request Site Assessment</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+254700000000">Call Us Now</a>
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

export default CommercialSolarSolutions;
