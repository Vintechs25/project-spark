import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Zap, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Real TechLam project images
import popeBenedictHospital from "@/assets/real-projects/solar-systems-pope-benedict.jpeg";
import karenDemeseSisters from "@/assets/real-projects/commercial-grid-tied-karen.jpeg";
import nyakiambiGirls from "@/assets/real-projects/large-rooftop-installation.jpeg";
import domesticWaterHeater from "@/assets/real-projects/dayliff-ultra-sun-heater.jpeg";
import boreholeSolarization from "@/assets/real-projects/borehole-solarization-pope-benedict.jpeg";
import commercialRooftop from "@/assets/real-projects/red-roof-solar-installation.jpeg";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  capacity: string;
  year: string;
  image: string;
  description: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pope Benedict Hospital",
    category: "Healthcare",
    location: "Nyahururu, Kenya",
    capacity: "100 kW",
    year: "2024",
    image: popeBenedictHospital,
    description: "Comprehensive solar PV installation for Pope Benedict Hospital, providing reliable clean energy for critical medical equipment and hospital operations.",
    results: [
      "100 kW inverter rated power",
      "16.25 MWh total yield",
      "Powers critical care units",
      "Real-time energy monitoring",
    ],
  },
  {
    id: 2,
    title: "Karen Demese Sisters Convent",
    category: "Commercial",
    location: "Karen, Nairobi",
    capacity: "60 kW",
    year: "2024",
    image: karenDemeseSisters,
    description: "Grid-tied solar system installation for the Demese Sisters facility in Karen, featuring modern rooftop panels and smart monitoring.",
    results: [
      "60 kW inverter rated power",
      "10.11 MWh total yield",
      "Minimal grid dependency",
      "Smart energy management",
    ],
  },
  {
    id: 3,
    title: "Nyakiambi Girls School",
    category: "Education",
    location: "Central Kenya",
    capacity: "50 kW",
    year: "2024",
    image: nyakiambiGirls,
    description: "Solar electrification project for Nyakiambi Girls Secondary School, enabling digital learning and reducing operational costs.",
    results: [
      "50 kW inverter rated power",
      "980.25 kWh total yield",
      "Reduced electricity bills",
      "Evening study programs enabled",
    ],
  },
  {
    id: 4,
    title: "Residential Solar Water Heater",
    category: "Residential",
    location: "Nairobi, Kenya",
    capacity: "300L Dayliff Ultra Sun",
    year: "2024",
    image: domesticWaterHeater,
    description: "Installation of Dayliff Ultra Sun evacuated tube solar water heating system for residential property, providing reliable hot water year-round.",
    results: [
      "300L hot water capacity",
      "Zero electricity for heating",
      "25-year panel lifespan",
      "Annual savings: KES 180,000",
    ],
  },
  {
    id: 5,
    title: "Borehole Solarization Project",
    category: "Water & Agriculture",
    location: "Nyahururu, Kenya",
    capacity: "Ground-mounted Array",
    year: "2023",
    image: boreholeSolarization,
    description: "Solar-powered borehole pump system at Pope Benedict Hospital, ensuring reliable water supply using clean renewable energy.",
    results: [
      "24/7 water pumping capability",
      "Zero fuel costs",
      "Reduced maintenance needs",
      "Sustainable water access",
    ],
  },
  {
    id: 6,
    title: "Commercial Rooftop Installation",
    category: "Commercial",
    location: "Central Kenya",
    capacity: "75 kW",
    year: "2024",
    image: commercialRooftop,
    description: "Large-scale rooftop solar installation with professional mounting and Huawei inverter systems for optimal energy production.",
    results: [
      "40% energy cost reduction",
      "Professional installation team",
      "Huawei smart inverters",
      "Real-time EPMS monitoring",
    ],
  },
];

const categories = ["All", "Healthcare", "Commercial", "Education", "Residential", "Water & Agriculture"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Installations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful solar installations across Kenya, from hospitals and schools to residential homes and commercial facilities.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-hero-gradient text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
            >
              <Card 
                className="group h-full border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {project.capacity}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </span>
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 text-base">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {selectedProject.capacity}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                        >
                          <div className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    Request Similar Installation
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
