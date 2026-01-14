import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Have questions about our packages? We're here to help you find the perfect fit 
            for your needs. Reach out and let's start your journey together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
