
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-mechitv-bg-light border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">MechiTV</h3>
            <p className="text-sm text-muted-foreground">
              East Africa's premier sports streaming platform, bringing competitive football content to viewers across the region.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-mechitv-accent">About Us</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Careers</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Press</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-mechitv-accent">Help Center</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-mechitv-accent">Twitter</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Instagram</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">Facebook</a></li>
              <li><a href="#" className="hover:text-mechitv-accent">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MechiTV. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Link to="/admin">Admin Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
