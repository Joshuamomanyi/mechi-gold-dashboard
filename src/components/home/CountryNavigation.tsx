
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Country {
  id: number;
  name: string;
  flag: string;
}

interface CountryNavigationProps {
  countries: Country[];
  onCountryChange: (countryName: string) => void;
  activeCountry: string;
}

const CountryNavigation = ({ countries, onCountryChange, activeCountry }: CountryNavigationProps) => {
  return (
    <div className="bg-mechitv-bg-light py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue={activeCountry}
          onValueChange={(value) => onCountryChange(value)}
          className="w-full"
        >
          <TabsList className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto pb-2 bg-transparent">
            {countries.map((country) => (
              <TabsTrigger 
                key={country.id} 
                value={country.name}
                className="flex flex-col items-center px-3 py-2 data-[state=active]:bg-mechitv-bg-light/40 data-[state=active]:border-b-2 data-[state=active]:border-mechitv-accent"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-mechitv-accent transition-all">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs mt-1 text-white/80 group-hover:text-mechitv-accent">
                  {country.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CountryNavigation;
