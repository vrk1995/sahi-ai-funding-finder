import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Building,
  TrendingUp,
  Users
} from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "",
    industry: "",
    fundingAmount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
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
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Send className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Get Started Today</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Find Funding</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tell us about your startup and funding needs. Our AI will analyze your profile and 
            match you with the most relevant opportunities within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to accelerate your funding journey? Our experts are here to help you navigate 
                the complex world of startup funding.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+91 9061791767</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">hello@sahistart.com</div>
                </div>
              </div>


              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border">
              <h4 className="font-semibold mb-4">Why Choose SahiStart?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Average funding secured: ₹2.5 Cr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Expert support throughout</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-accent" />
                  <span className="text-sm">Access to 500+ funding sources</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong border-2 border-primary/20 bg-gradient-to-br from-background to-muted/50">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4 shadow-glow">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl bg-gradient-hero bg-clip-text text-transparent">Start Your Funding Journey</CardTitle>
                <CardDescription className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Answer a few questions and our AI will analyze your profile to find the best funding matches tailored for your business.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</Label>
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
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 9061791767"
                        className="h-12 border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-semibold text-foreground">Company Name *</Label>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="stage">Business Stage *</Label>
                      <Select value={formData.stage} onValueChange={(value) => handleInputChange("stage", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea Stage</SelectItem>
                          <SelectItem value="prototype">Prototype/MVP</SelectItem>
                          <SelectItem value="early">Early Stage</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                          <SelectItem value="expansion">Expansion Stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="fundingAmount" className="text-sm font-semibold text-foreground">Funding Amount Required</Label>
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
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Tell us about your business and funding needs</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your business, the problem you're solving, and how you plan to use the funding. Share your vision and goals..."
                      rows={5}
                      className="border-2 border-muted focus:border-primary/50 bg-background/50 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-gradient-hero text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-strong hover:shadow-glow group text-lg font-semibold"
                  >
                    🎯 Get My Funding Matches
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                    We'll contact you within 24 hours with personalized funding recommendations.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;