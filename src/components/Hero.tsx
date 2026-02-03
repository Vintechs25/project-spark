import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const stats = [
  { icon: Zap, value: "500+", label: "Installations" },
  { icon: Shield, value: "25yr", label: "Warranty" },
  { icon: TrendingDown, value: "40%", label: "Cost Savings" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panel installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Leading Renewable Energy in Kenya</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
            >
              Innovative{" "}
              <span className="text-primary">Energy</span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Techlam Technologies Limited leads in renewable energy, offering high-performance solar solutions, hot water systems, and advanced monitoring to power a sustainable future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="w-6 h-6 text-primary mx-auto lg:mx-0 mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Decorative floating elements */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-24 h-24 rounded-2xl bg-primary/30 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-accent/20 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
