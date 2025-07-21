import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Send us a message and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <Input placeholder="Your first name" />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <Input placeholder="Your last name" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <Input type="tel" placeholder="+254 700 000 000" />
            </div>
            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="How can we help you?" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Tell us more about your inquiry..." 
                className="min-h-[120px]"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-mechitv-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">support@mechitv.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mechitv-accent" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-mechitv-accent" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    Nairobi, Kenya<br />
                    East Africa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-mechitv-accent" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">How do I purchase tickets?</h4>
                <p className="text-sm text-muted-foreground">
                  Visit our ticketing page, select your event, choose your seats, and complete the checkout process.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Can I get a refund for my tickets?</h4>
                <p className="text-sm text-muted-foreground">
                  Tickets are generally non-refundable except in cases where an event is cancelled.
                </p>
              </div>
              <div>
                <h4 className="font-medium">How do I track my jersey order?</h4>
                <p className="text-sm text-muted-foreground">
                  You'll receive a tracking number via SMS and email once your order ships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;