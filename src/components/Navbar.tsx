
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className={cn(
              "text-2xl md:text-3xl font-display font-bold transition-colors duration-300",
              isScrolled ? "text-village-green" : "text-white"
            )}>
              Venkatapuram
              <span className="text-village-gold">.</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors",
                  isScrolled 
                    ? "hover:text-village-teal" 
                    : "text-white hover:text-village-gold",
                  location.pathname === item.path 
                    ? isScrolled ? "text-village-teal after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-village-teal" 
                    : "text-village-gold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-village-gold"
                    : "",
                  "relative"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-md hover:bg-accent/10",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "top-[60px] max-h-[300px] opacity-100" : "top-[60px] max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "text-lg py-2 px-4 rounded-md transition-colors hover:bg-accent/10",
                  location.pathname === item.path ? "text-village-teal font-medium bg-accent/10" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
