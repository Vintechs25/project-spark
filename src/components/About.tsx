import { motion } from "framer-motion";
import { Check, Award, Users, Globe } from "lucide-react";

const features = [
  "Certified renewable energy experts",
  "25-year performance warranty",
  "24/7 monitoring and support",
  "Custom solutions for every need",
];

const achievements = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "47", label: "Counties Served" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Powering Kenya's{" "}
              <span className="text-primary">Sustainable Future</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              Techlam Technologies Limited is a leading renewable energy company committed to transforming how Kenya consumes energy. We design, install, and maintain cutting-edge solar solutions that help businesses and homes reduce their carbon footprint while saving on energy costs.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-secondary-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary-foreground/20">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-foreground">{item.value}</div>
                  <div className="text-sm text-secondary-foreground/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
              />
              
              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-hero-gradient flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground">10+</div>
                  <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-card text-card-foreground shadow-card text-sm font-medium"
              >
                🌱 Eco-Friendly
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-card text-card-foreground shadow-card text-sm font-medium"
              >
                ⚡ Energy Efficient
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
