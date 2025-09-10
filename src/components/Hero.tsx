import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-secondary/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Rocket className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-secondary-dark">AI-Powered Funding Solutions</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Perfect 
                <span className="text-gradient block">Funding for Your</span>
                Startup Journey
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Discover government grants, subsidies, loans, and private funding opportunities with our AI-driven matching system. Get personalized recommendations based on your industry, stage, and eligibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth shadow-medium group"
              >
                Find Funding Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Funding Sources</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-secondary">₹100Cr+</div>
                <div className="text-sm text-muted-foreground">Funding Matched</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Startups Helped</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-card shadow-soft border hover:shadow-medium transition-smooth">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Smart Matching</h3>
                  <p className="text-sm text-muted-foreground">AI analyzes your profile to find the best funding opportunities</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-soft border hover:shadow-medium transition-smooth">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Real-time Updates</h3>
                  <p className="text-sm text-muted-foreground">Get instant notifications about new funding opportunities</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-soft border hover:shadow-medium transition-smooth">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">End-to-End Support</h3>
                  <p className="text-sm text-muted-foreground">From discovery to application - we guide you through everything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;