import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles,
  Target,
  TrendingUp,
  Building,
  DollarSign
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  stage: string;
  industry: string;
  fundingAmount: string;
  message: string;
}

interface FundingOption {
  title: string;
  description: string;
  amount: string;
  eligibility: string;
  icon: string;
}

const InteractiveQuestionnaire = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "",
    industry: "",
    fundingAmount: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFundingOptions = (): FundingOption[] => {
    const options: FundingOption[] = [];
    
    if (formData.stage === "idea" || formData.stage === "prototype") {
      options.push({
        title: "Startup India Seed Fund",
        description: "Government seed funding for early-stage startups",
        amount: "Up to ₹50 Lakhs",
        eligibility: "DPIIT recognized startups",
        icon: "🌱"
      });
    }
    
    if (formData.industry === "technology") {
      options.push({
        title: "NASSCOM 10K Startups",
        description: "Support program for tech startups",
        amount: "₹25L - 2Cr",
        eligibility: "Tech startups",
        icon: "💻"
      });
    }
    
    if (formData.fundingAmount === "under-10l" || formData.fundingAmount === "10l-50l") {
      options.push({
        title: "MUDRA Yojana",
        description: "Micro-finance for small businesses",
        amount: "Up to ₹10 Lakhs",
        eligibility: "All MSMEs",
        icon: "🏪"
      });
    }
    
    if (formData.industry === "manufacturing") {
      options.push({
        title: "Make in India Incentives",
        description: "Manufacturing sector incentives",
        amount: "₹1Cr - 10Cr",
        eligibility: "Manufacturing units",
        icon: "🏭"
      });
    }

    // Default options
    if (options.length === 0) {
      options.push(
        {
          title: "Angel Investment Networks",
          description: "Connect with angel investors",
          amount: "₹25L - 5Cr",
          eligibility: "Scalable business models",
          icon: "👼"
        },
        {
          title: "Venture Capital Funds",
          description: "Growth stage funding",
          amount: "₹2Cr - 50Cr",
          eligibility: "Growth stage startups",
          icon: "🚀"
        }
      );
    }
    
    return options;
  };

  const steps = [
    {
      title: "Let's Start with Basics",
      description: "Tell us about yourself and your company",
      fields: ["name", "email", "company"]
    },
    {
      title: "Business Details",
      description: "Help us understand your business better",
      fields: ["stage", "industry"]
    },
    {
      title: "Funding Requirements",
      description: "What are your funding needs?",
      fields: ["fundingAmount", "message"]
    }
  ];

  const nextStep = () => {
    if (currentStep === 1) {
      setShowOptions(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setShowOptions(false);
      }, 3000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted! 🎉",
      description: "Our AI is analyzing your profile. You'll receive personalized funding matches within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      stage: "",
      industry: "",
      fundingAmount: "",
      message: ""
    });
    setCurrentStep(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-semibold">Your Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
                className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="company" className="text-sm font-semibold">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your startup name"
                required
                className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="stage" className="text-sm font-semibold">Business Stage *</Label>
              <Select value={formData.stage} onValueChange={(value) => handleInputChange("stage", value)}>
                <SelectTrigger className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50">
                  <SelectValue placeholder="Select your stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="idea">💡 Idea Stage</SelectItem>
                  <SelectItem value="prototype">🔧 Prototype/MVP</SelectItem>
                  <SelectItem value="early">🌱 Early Stage</SelectItem>
                  <SelectItem value="growth">📈 Growth Stage</SelectItem>
                  <SelectItem value="expansion">🚀 Expansion Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="industry" className="text-sm font-semibold">Industry *</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">💻 Technology</SelectItem>
                  <SelectItem value="healthcare">🏥 Healthcare</SelectItem>
                  <SelectItem value="fintech">💳 FinTech</SelectItem>
                  <SelectItem value="ecommerce">🛒 E-commerce</SelectItem>
                  <SelectItem value="manufacturing">🏭 Manufacturing</SelectItem>
                  <SelectItem value="agriculture">🌾 Agriculture</SelectItem>
                  <SelectItem value="education">📚 Education</SelectItem>
                  <SelectItem value="other">🔧 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="fundingAmount" className="text-sm font-semibold">Funding Amount Required</Label>
              <Select value={formData.fundingAmount} onValueChange={(value) => handleInputChange("fundingAmount", value)}>
                <SelectTrigger className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50">
                  <SelectValue placeholder="Select your funding range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-10l">💰 Under ₹10 Lakhs</SelectItem>
                  <SelectItem value="10l-50l">💸 ₹10 - 50 Lakhs</SelectItem>
                  <SelectItem value="50l-1cr">💎 ₹50 Lakhs - 1 Crore</SelectItem>
                  <SelectItem value="1cr-5cr">🚀 ₹1 - 5 Crores</SelectItem>
                  <SelectItem value="5cr-10cr">⭐ ₹5 - 10 Crores</SelectItem>
                  <SelectItem value="above-10cr">🏆 Above ₹10 Crores</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold">Tell us about your business</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Describe your business, the problem you're solving, and how you plan to use the funding..."
                rows={4}
                className="border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200 resize-none"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showOptions) {
    const options = getFundingOptions();
    return (
      <div className="text-center space-y-8">
        <div className="animate-pulse-glow">
          <Sparkles className="w-16 h-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🎯 Analyzing Your Profile...</h3>
          <p className="text-muted-foreground">Our AI is finding the best funding matches for {formData.company}</p>
        </div>
        
        <div className="grid gap-4">
          {options.map((option, index) => (
            <Card key={index} className="glass-card border-2 border-primary/20 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{option.icon}</div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-primary">{option.title}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-secondary">{option.amount}</span>
                      <span className="text-xs text-muted-foreground">{option.eligibility}</span>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card className="shadow-strong border-2 border-primary/20 bg-gradient-to-br from-background to-muted/50">
      <CardHeader className="text-center pb-8">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4 shadow-glow">
          <Target className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-3xl bg-gradient-hero bg-clip-text text-transparent">
          {steps[currentStep]?.title}
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {steps[currentStep]?.description}
        </CardDescription>
        
        {/* Progress Bar */}
        <div className="flex items-center space-x-2 max-w-xs mx-auto mt-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-gradient-hero' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Step {currentStep + 1} of {steps.length}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}
          
          <div className="flex justify-between items-center pt-6">
            {currentStep > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
            )}
            
            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.company || (currentStep === 1 && (!formData.stage || !formData.industry))}
                className={`ml-auto bg-gradient-hero text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-strong hover:shadow-glow group ${currentStep === 0 ? 'ml-auto' : ''}`}
              >
                <span>{currentStep === 1 ? '🔍 Find My Matches' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!formData.fundingAmount}
                className="ml-auto bg-gradient-hero text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-strong hover:shadow-glow group"
              >
                <span>🎯 Submit Application</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InteractiveQuestionnaire;