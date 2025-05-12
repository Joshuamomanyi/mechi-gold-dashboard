
import React from "react";

interface Country {
  id: number;
  name: string;
  flag: string;
}

interface CountryNavigationProps {
  countries: Country[];
}

const CountryNavigation = ({ countries }: CountryNavigationProps) => {
  return (
    <div className="bg-mechitv-bg-light py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto pb-2">
          {countries.map((country) => (
            <div key={country.id} className="flex flex-col items-center cursor-pointer group">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryNavigation;
