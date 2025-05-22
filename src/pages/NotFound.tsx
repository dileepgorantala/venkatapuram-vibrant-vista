
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-village-green mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist in our village.
        </p>
        <Link to="/">
          <Button className="bg-village-green hover:bg-village-green/90 text-white">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Village Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
