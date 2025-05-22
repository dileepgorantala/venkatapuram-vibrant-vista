
import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="bg-village-green text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Venkatapuram Village</h3>
            <p className="mb-4">
              A beautiful village with rich culture and heritage, embracing modernity while preserving its traditions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-village-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-village-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-village-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-village-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-village-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-village-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-village-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-bold mb-4">Contact Info</h4>
            <address className="not-italic">
              <p className="mb-2">123 Village Center</p>
              <p className="mb-2">Venkatapuram, District</p>
              <p className="mb-2">State - PIN</p>
              <p className="mb-2">Phone: +91 98765 43210</p>
              <p className="mb-2">Email: info@venkatapuram.org</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Venkatapuram Village. All rights reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
