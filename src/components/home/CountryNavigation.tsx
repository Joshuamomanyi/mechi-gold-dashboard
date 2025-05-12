
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
          <TabsList className="flex items-center justify-center space-x-6 md:space-x-8 bg-transparent">
            {countries.map((country) => (
              <TabsTrigger 
                key={country.id} 
                value={country.name}
                className="flex flex-col items-center px-3 py-2 data-[state=active]:bg-transparent"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                  activeCountry === country.name ? 'border-mechitv-accent' : 'border-transparent'
                }`}>
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`text-xs mt-1 transition-colors ${
                  activeCountry === country.name ? 'text-mechitv-accent' : 'text-white/80'
                }`}>
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
