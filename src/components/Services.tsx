import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileText, 
  Presentation, 
  Search, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Funding Discovery",
      description: "Access our comprehensive database of 500+ funding sources including government grants, subsidies, loans, and private funding opportunities.",
      features: [
        "Government Grants & Subsidies",
        "Bank Loans & Credit Lines", 
        "Angel & VC Funding",
        "International Funding Programs"
      ],
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced AI algorithms analyze your business profile to deliver personalized funding recommendations with high success probability.",
      features: [
        "Industry-Specific Matching",
        "Stage-Based Recommendations",
        "Eligibility Assessment",
        "Success Rate Predictions"
      ],
      color: "secondary"
    },
    {
      icon: FileText,
      title: "Project Reports & Documentation",
      description: "Get professionally crafted project reports, business plans, and financial projections that meet funding requirements.",
      features: [
        "Detailed Project Reports",
        "Financial Projections",
        "Market Analysis Reports",
        "Compliance Documentation"
      ],
      color: "accent"
    },
    {
      icon: Presentation,
      title: "Pitch Deck Creation",
      description: "Create compelling pitch decks that capture investor attention and clearly communicate your value proposition.",
      features: [
        "Investor-Ready Presentations",
        "Visual Storytelling",
        "Financial Modeling",
        "Market Opportunity Analysis"
      ],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to strengthen your funding applications and business strategy.",
      features: [
        "Industry Trend Analysis",
        "Competitive Landscape",
        "Market Size & Opportunity",
        "Growth Projections"
      ],
      color: "secondary"
    },
    {
      icon: Target,
      title: "Application Support",
      description: "End-to-end guidance throughout the application process to maximize your chances of funding success.",
      features: [
        "Application Strategy",
        "Document Review",
        "Interview Preparation",
        "Follow-up Support"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Target className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary-dark">Comprehensive Solutions</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From funding discovery to application success - we provide everything your startup needs 
            to secure the right funding at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-2 hover:border-primary/20"
            >
              <CardHeader className="space-y-4">
                <div className={`p-3 rounded-lg w-fit ${
                  service.color === 'primary' ? 'bg-primary/10' :
                  service.color === 'secondary' ? 'bg-secondary/10' :
                  'bg-accent/10'
                } group-hover:scale-110 transition-bounce`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === 'primary' ? 'text-primary' :
                    service.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-smooth shadow-medium"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;