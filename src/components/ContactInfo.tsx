import { 
  Phone, 
  Mail, 
  Clock,
  TrendingUp,
  Users,
  Building
} from "lucide-react";

const ContactInfo = () => {
  return (
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
            <div className="text-muted-foreground">+91 755 800 77 44</div>
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
  );
};

export default ContactInfo;
