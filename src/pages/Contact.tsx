
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <address className="not-italic text-gray-600">
                  123 Food Street<br />
                  Foodville, FD 12345<br />
                  United States
                </address>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-gray-600">info@elbesha.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 10:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Find Us</h2>
            <div className="bg-gray-200 rounded-lg h-72 overflow-hidden">
              {/* This would be a Google Map in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="text-gray-600">Map would be displayed here</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help you?" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Write your message here..." 
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold mb-2">Feedback & Complaints</h3>
            <p className="text-sm text-gray-600">
              We value your feedback! If you have any suggestions or complaints about our 
              food or service, please don't hesitate to let us know using this form or 
              by contacting our customer service team directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
