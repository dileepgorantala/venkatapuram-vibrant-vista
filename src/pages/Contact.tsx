
import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "bottom-center",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-village-green opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-village-green mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with the Venkatapuram village administration
            </p>
          </div>
        </div>
      </section>
      
      <Section
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out with any questions, suggestions, or to plan your visit."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 reveal">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Please provide details about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 resize-none"
                  rows={6}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-village-green hover:bg-village-green/90 text-white w-full py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 reveal">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-village-green/10 text-village-green">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-bold">Visit Us</h3>
              </div>
              <address className="not-italic text-muted-foreground">
                <p className="mb-1">123 Village Main Road</p>
                <p className="mb-1">Venkatapuram Village</p>
                <p className="mb-1">District, State</p>
                <p>PIN Code: 500000</p>
              </address>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-village-green/10 text-village-green">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-bold">Call Us</h3>
              </div>
              <p className="text-muted-foreground mb-1">Village Office: +91 98765 43210</p>
              <p className="text-muted-foreground">Tourism Information: +91 98765 12345</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-village-green/10 text-village-green">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-bold">Email Us</h3>
              </div>
              <p className="text-muted-foreground mb-1">General Inquiries: info@venkatapuram.org</p>
              <p className="text-muted-foreground">Visitor Information: visit@venkatapuram.org</p>
            </div>
          </div>
        </div>
      </Section>
      
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto reveal">
            <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.39076388164!2d78.4!1d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAuMCJOIDc4wrAyNCcwLjAiRQ!5e0!3m2!1sen!2sin!4v1621509600000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Venkatapuram Village Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Section
        title="Visit Information"
        subtitle="Planning to visit Venkatapuram? Here's some useful information to help you prepare."
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-display font-bold text-village-green mb-4">How to Reach</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>By Road:</strong> Regular buses and taxis available from nearby cities. Village is connected by state highway.</p>
              <p><strong>By Train:</strong> Nearest railway station is 15km away, with frequent local transport options to the village.</p>
              <p><strong>By Air:</strong> Nearest airport is approximately 50km away. Airport taxis and shuttle services available.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-display font-bold text-village-green mb-4">Best Time to Visit</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>October to March:</strong> Pleasant weather, perfect for exploring outdoor attractions and village life.</p>
              <p><strong>April to June:</strong> Summer season with traditional festival celebrations worth experiencing.</p>
              <p><strong>Festival Season (varies):</strong> Check our calendar for specific festival dates for an enhanced cultural experience.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
