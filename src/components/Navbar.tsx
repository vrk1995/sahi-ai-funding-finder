import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-primary/20 shadow-cyber">
      <div className="container flex h-40 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-background/90 shadow-cyber hover:shadow-neon transition-elastic hover:scale-105 border border-primary/20">
            <img 
              src="/lovable-uploads/e5473e11-7e7f-40c0-a39e-8031f68ef2b2.png" 
              alt="SahiStart Logo" 
              className="h-40 w-auto"
            />
          </div>
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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                Login
              </Button>
              <Button variant="default" size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth" onClick={() => navigate("/auth")}>
                Get Started
              </Button>
            </>
          )}
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
              {user ? (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                  <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/auth")}>
                    Login
                  </Button>
                  <Button variant="default" size="sm" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth" onClick={() => navigate("/auth")}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
