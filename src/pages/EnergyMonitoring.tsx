import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BarChart3, Smartphone, Bell, TrendingDown, Zap, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import monitoringDashboard from "@/assets/real-projects/energy-monitoring-dashboard.jpeg";
import smartSensor from "@/assets/real-projects/smart-power-sensor.jpeg";
import monitoringKaren from "@/assets/real-projects/monitoring-karen-demese.jpeg";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor your energy consumption in real-time. See exactly where your power is going and identify waste."
  },
  {
    icon: Smartphone,
    title: "Mobile App Access",
    description: "Check your energy usage from anywhere. Get instant access to dashboards via smartphone or tablet."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive notifications when consumption exceeds thresholds or anomalies are detected."
  },
  {
    icon: TrendingDown,
    title: "Cost Reduction",
    description: "Identify energy waste and optimize consumption. Typically save 10-30% on electricity bills."
  }
];

const capabilities = [
  "Real-time power consumption monitoring",
  "Historical data and trend analysis",
  "Peak demand tracking and alerts",
  "Power quality monitoring (voltage, frequency)",
  "Solar production monitoring",
  "Battery state-of-charge tracking",
  "Multi-site dashboard",
  "Automated reporting",
  "Integration with building management systems",
  "Carbon footprint tracking"
];

const systems = [
  {
    title: "Residential Monitoring",
    description: "Smart home energy monitoring for solar system owners.",
    features: ["Solar production tracking", "Battery monitoring", "Grid import/export", "Mobile app"]
  },
  {
    title: "Commercial EPMS",
    description: "Enterprise-grade Electrical Power Monitoring Systems.",
    features: ["Multi-meter support", "Department-level tracking", "Demand management", "Automated reports"]
  },
  {
    title: "Industrial SCADA",
    description: "Advanced monitoring for factories and large facilities.",
    features: ["Process integration", "Power quality analysis", "Predictive maintenance", "Custom dashboards"]
  }
];

const EnergyMonitoring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={monitoringDashboard}
              alt="Energy monitoring dashboard"
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
                See Your Energy in Real-Time
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Energy Monitoring Systems Kenya
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Take control of your energy consumption with advanced monitoring systems. Track usage, identify waste, and optimize performance in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                  asChild
                >
                  <a href="#contact">
                    Get Free Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Monitor Your Energy?
              </h2>
              <p className="text-lg text-muted-foreground">
                You can't manage what you can't measure. Energy monitoring reveals hidden waste and opportunities for savings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
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
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Monitoring Capabilities
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our energy monitoring systems provide complete visibility into your electrical infrastructure.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <img src={smartSensor} alt="Smart power sensor" className="rounded-xl shadow-card w-full h-40 object-cover" />
                <img src={monitoringKaren} alt="Energy monitoring system" className="rounded-xl shadow-card w-full h-40 object-cover" />
                <img src={monitoringDashboard} alt="Monitoring dashboard" className="rounded-xl shadow-card w-full h-40 object-cover col-span-2" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Systems Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Monitoring Solutions for Every Scale
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {systems.map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-card bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{system.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                      <ul className="space-y-2">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <Zap className="w-4 h-4 text-primary flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Wifi className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Start Monitoring Your Energy Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free consultation on the right monitoring solution for your needs.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Get Free Demo</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnergyMonitoring;
