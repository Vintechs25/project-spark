import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
