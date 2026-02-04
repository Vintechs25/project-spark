import { motion } from "framer-motion";
import { Sun, Droplets, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Real project images for solutions
import solarPVImage from "@/assets/real-projects/commercial-rooftop-panels.jpeg";
import waterHeaterImage from "@/assets/real-projects/dayliff-ultra-sun-heater.jpeg";
import monitoringImage from "@/assets/real-projects/energy-monitoring-dashboard.jpeg";
import pfcImage from "@/assets/real-projects/power-factor-correction.jpeg";

const solutions = [
  {
    icon: Sun,
    title: "Solar PV Systems",
    description:
      "High-performance solar photovoltaic systems designed to minimize energy costs while promoting sustainability for businesses and homes.",
    color: "from-primary to-primary/70",
    image: solarPVImage,
    href: "/solar-installation-kenya",
  },
  {
    icon: Droplets,
    title: "Solar Water Heaters",
    description:
      "Harness Kenya's abundant sunshine with our reliable hot water solutions for homes and institutions, ensuring energy efficiency.",
    color: "from-accent to-accent/70",
    image: waterHeaterImage,
    href: "/solar-water-heaters",
  },
  {
    icon: BarChart3,
    title: "Energy Monitoring",
    description:
      "Advanced electrical power monitoring systems (EPMS) offering real-time insights to optimize performance and reduce expenditures.",
    color: "from-primary to-primary/70",
    image: monitoringImage,
    href: "/energy-monitoring",
  },
  {
    icon: Zap,
    title: "Power Factor Correction",
    description:
      "Lower energy bills and improve system performance with our power factor correction banks for industrial applications.",
    color: "from-accent to-accent/70",
    image: pfcImage,
    href: "#contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Solutions = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-subtle-gradient">
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
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sustainable Energy{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide tailored renewable energy systems to reduce costs and enhance efficiency for businesses across Kenya.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card overflow-hidden">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg`}
                  >
                    <solution.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {solution.description}
                  </p>
                  {solution.href.startsWith('/') ? (
                    <Link
                      to={solution.href}
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={solution.href}
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
