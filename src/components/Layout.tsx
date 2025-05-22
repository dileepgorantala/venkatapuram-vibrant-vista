
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout: React.FC = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
      
      // Parallax effect
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = 0.2;
        const elementTop = element.getBoundingClientRect().top;
        const parallaxOffset = elementTop * speed;
        (element as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
