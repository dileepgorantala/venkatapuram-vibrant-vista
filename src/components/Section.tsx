
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  dark
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 opacity-0 transition-all duration-1000",
        dark ? "bg-village-green text-white" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <div className="relative inline-block mb-6">
            <h2 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold",
              dark ? "text-white" : "text-village-green"
            )}>
              {title}
            </h2>
            <div className={cn(
              "h-1 w-24 mx-auto mt-4 transform transition-all duration-500 ease-in-out group-hover:w-32",
              dark ? "bg-village-gold" : "bg-village-teal"
            )}></div>
          </div>
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl animate-fade-up",
              dark ? "text-white/80" : "text-muted-foreground"
            )}
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
