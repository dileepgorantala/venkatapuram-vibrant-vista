
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')", 
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-village-green/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-down">
            Welcome to <span className="text-village-gold">Venkatapuram</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A breathtaking village with rich cultural heritage and a progressive outlook. 
            Discover our community, traditions, and scenic landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/about">
              <Button className="bg-village-gold hover:bg-village-gold/90 text-village-green font-medium text-lg px-6 py-6">
                Explore Our Village
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-6">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col animate-bounce">
        <span className="text-white text-sm mb-2 opacity-70">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white opacity-70"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
