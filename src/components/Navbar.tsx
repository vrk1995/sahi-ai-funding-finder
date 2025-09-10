import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e5473e11-7e7f-40c0-a39e-8031f68ef2b2.png" 
            alt="SahiStart Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Home
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            How It Works
          </a>
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#why-sahistart" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Why SahiStart
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <a href="#home" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#why-sahistart" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Why SahiStart
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Login
              </Button>
              <Button variant="default" size="sm" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;