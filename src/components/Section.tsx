
import { cn } from "@/lib/utils";

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
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-village-green text-white" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <h2 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
            dark ? "text-white" : "text-village-green"
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl",
              dark ? "text-white/80" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
