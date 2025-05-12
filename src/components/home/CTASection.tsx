
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-mechitv-accent/30 to-mechitv-bg-light rounded-lg p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience East African Football?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of passionate football fans across East Africa. Create your account now to start watching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-lg px-8">
              Sign Up
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
