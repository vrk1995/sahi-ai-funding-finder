import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img src="/lovable-uploads/e5473e11-7e7f-40c0-a39e-8031f68ef2b2.png" alt="SahiStart Logo" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80 leading-relaxed">
                Empowering startups and MSMEs with AI-driven funding solutions. 
                Your success is our mission.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@sahistart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 755 800 77 44</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-sahistart" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Why SahiStart
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-primary-foreground/80">Funding Discovery</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">AI Matching</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Project Reports</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Pitch Decks</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Market Analysis</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get the latest funding opportunities and startup insights delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-primary-foreground placeholder:text-primary-foreground/60" />
                <Button size="sm" variant="secondary" className="bg-secondary hover:bg-secondary-light transition-smooth">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex space-x-3">
                <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} Sahistart Pvt Ltd.  <br>
            CIN: U70200KL2025PTC097293 <br>
            All rights reserved.
              
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Cookie Policy
            </a>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
