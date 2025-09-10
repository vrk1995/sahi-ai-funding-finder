import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const WhySahiStart = () => {
  const advantages = [
    {
      icon: Zap,
      title: "AI-Powered Precision",
      description: "Our advanced algorithms match you with funding opportunities that align perfectly with your business profile, saving you countless hours of research.",
      benefit: "10x Faster Discovery"
    },
    {
      icon: Shield,
      title: "Trusted by Thousands",
      description: "Over 1000+ startups and MSMEs have successfully secured funding through our platform. Join a community of successful entrepreneurs.",
      benefit: "98% Success Rate"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team of funding experts and mentors provide personalized support throughout your funding journey, from application to approval.",
      benefit: "Dedicated Support"
    },
    {
      icon: Award,
      title: "Comprehensive Database",
      description: "Access to 500+ funding sources including government schemes, private investors, banks, and international funding programs.",
      benefit: "Complete Coverage"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Stay ahead with instant notifications about new funding opportunities, deadline reminders, and application status updates.",
      benefit: "Never Miss Out"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions with our analytics dashboard showing market trends, success rates, and competitive intelligence.",
      benefit: "Smart Decisions"
    }
  ];

  const stats = [
    { value: "₹100Cr+", label: "Funding Secured", icon: TrendingUp },
    { value: "1000+", label: "Startups Helped", icon: Users },
    { value: "500+", label: "Funding Sources", icon: Award },
    { value: "98%", label: "Success Rate", icon: Star }
  ];

  return (
    <section id="why-sahistart" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Award className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent-foreground">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gradient">SahiStart</span> is Different
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just list funding opportunities - we provide intelligent matching, expert guidance, 
            and end-to-end support to maximize your funding success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card shadow-soft border hover:shadow-medium transition-smooth"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-smooth border-2 hover:border-secondary/20"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-smooth">
                    <advantage.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                    {advantage.benefit}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Everything You Need in One Platform
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "AI-Powered Matching",
              "Expert Consultation",
              "Document Preparation",
              "Application Tracking",
              "Investor Connections",
              "Market Research",
              "Pitch Deck Creation",
              "Financial Modeling",
              "Compliance Support",
              "Success Analytics",
              "24/7 Support",
              "Mobile App Access"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySahiStart;