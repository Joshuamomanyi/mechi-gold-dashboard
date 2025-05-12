
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-mechitv-bg-light rounded-lg my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Affordable Pricing Plans</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that works for you. Watch your favorite teams without breaking the bank.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pay Per Match */}
        <div className="bg-mechitv-bg rounded-lg p-6 border border-border hover:border-mechitv-accent/50 transition-all">
          <h3 className="text-xl font-bold mb-2">Pay Per Match</h3>
          <div className="text-3xl font-bold mb-4">KSh 99<span className="text-lg text-muted-foreground font-normal">/match</span></div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>HD quality streaming</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Full match replay for 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Watch on any device</span>
            </li>
          </ul>
          <Button className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg" variant="outline">
            Select
          </Button>
        </div>
        
        {/* Monthly Plan */}
        <div className="bg-gradient-to-b from-mechitv-accent/20 to-mechitv-bg rounded-lg p-6 border border-mechitv-accent relative transform scale-105 shadow-xl">
          <Badge className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-mechitv-accent text-mechitv-bg">POPULAR</Badge>
          <h3 className="text-xl font-bold mb-2">Monthly Pass</h3>
          <div className="text-3xl font-bold mb-4">KSh 999<span className="text-lg text-muted-foreground font-normal">/month</span></div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Unlimited access to all matches</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Full match replays</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Exclusive interviews & highlights</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Watch on 2 devices simultaneously</span>
            </li>
          </ul>
          <Button className="w-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
            Subscribe Now
          </Button>
        </div>
        
        {/* Season Pass */}
        <div className="bg-mechitv-bg rounded-lg p-6 border border-border hover:border-mechitv-accent/50 transition-all">
          <h3 className="text-xl font-bold mb-2">Season Pass</h3>
          <div className="text-3xl font-bold mb-4">KSh 4999<span className="text-lg text-muted-foreground font-normal">/season</span></div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Best value for die-hard fans</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>All Monthly Pass features</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Exclusive team merchandise discount</span>
            </li>
            <li className="flex items-start">
              <span className="text-mechitv-accent mr-2">✓</span>
              <span>Watch on 3 devices simultaneously</span>
            </li>
          </ul>
          <Button className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg" variant="outline">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
