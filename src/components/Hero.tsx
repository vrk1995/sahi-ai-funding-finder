import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-neon opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-shimmer"></div>
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand Name */}
            <div className="flex items-center mb-3">
              <span className="sahi-text">SAHI</span>&nbsp;&nbsp;<span className="start-text">START</span>
            </div>
            
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border shadow-cyber animate-pulse-glow">
              <Rocket className="w-5 h-5 text-secondary mr-2" />
              <span className="text-sm font-semibold bg-gradient-neon bg-clip-text text-transparent">🚀 AI-Powered Funding Solutions</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find <span className="text-gradient">Perfect</span>
                <span className="block text-gradient">Funding</span>
                <span className="block">for Your Future</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                🎯 Discover government grants, subsidies, loans, and private funding with our 
                <span className="bg-gradient-hero bg-clip-text text-transparent font-semibold"> AI-driven matching system</span>. 
                Get personalized recommendations in real-time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground hover:scale-105 transition-elastic shadow-cyber hover:shadow-neon group text-lg px-8 py-4 h-auto"
              >
                🚀 Find Funding Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-elastic" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass border-primary/30 text-primary hover:bg-gradient-hero hover:text-primary-foreground transition-elastic hover:scale-105 px-8 py-4 h-auto"
              >
                🎬 Watch Demo
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
            <div className="glass-card p-8 rounded-3xl hover:shadow-neon transition-elastic hover:scale-105 border-primary/20">
              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-2xl bg-gradient-primary shadow-cyber animate-pulse-glow">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">🎯 Smart AI Matching</h3>
                  <p className="text-muted-foreground">Advanced algorithms analyze your profile for perfect funding matches</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl hover:shadow-neon transition-elastic hover:scale-105 border-secondary/20">
              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-2xl bg-gradient-secondary shadow-cyber animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                  <TrendingUp className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">⚡ Real-time Intelligence</h3>
                  <p className="text-muted-foreground">Instant notifications about new opportunities as they emerge</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl hover:shadow-neon transition-elastic hover:scale-105 border-accent/20">
              <div className="flex items-center space-x-6">
                <div className="p-4 rounded-2xl bg-gradient-accent shadow-cyber animate-pulse-glow" style={{animationDelay: '1s'}}>
                  <Rocket className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">🛸 End-to-End Support</h3>
                  <p className="text-muted-foreground">Complete guidance from discovery to successful funding</p>
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
