import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, FileSearch, Lightbulb, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Share Your Business Details",
      description: "Tell us about your startup, industry, stage, and funding requirements through our smart questionnaire.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis & Matching",
      description: "Our AI engine analyzes your profile against 500+ funding sources to find the perfect matches.",
      step: "02"
    },
    {
      icon: Lightbulb,
      title: "Get Personalized Recommendations",
      description: "Receive a curated list of funding opportunities with eligibility details and application guidance.",
      step: "03"
    },
    {
      icon: Zap,
      title: "Apply with Confidence",
      description: "Get help with project reports, pitch decks, and market analysis to strengthen your applications.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Simple & Effective Process</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">SahiStart</span> Works
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform makes finding and securing funding simple, fast, and effective. 
            Follow these four steps to unlock funding opportunities for your startup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-2xl bg-card shadow-soft border hover:shadow-medium transition-smooth group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-gradient-hero text-primary-foreground text-sm font-bold flex items-center justify-center shadow-medium">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="pt-6 space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth shadow-medium group"
          >
            Start Your Funding Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;