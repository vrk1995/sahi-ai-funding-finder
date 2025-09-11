import { Send } from "lucide-react";
import InteractiveQuestionnaire from "./InteractiveQuestionnaire";
import ContactInfo from "./ContactInfo";

const ContactForm = () => {

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
          {/* Interactive Questionnaire */}
          <div className="lg:col-span-2">
            <InteractiveQuestionnaire />
          </div>
          
          {/* Contact Information */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;