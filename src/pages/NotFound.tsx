
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="space-y-2">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <div className="mt-4">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/menu">Browse Our Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
