
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Shirt
} from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const JerseyStorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState<{[key: string]: string}>({});
  const { addItem } = useCart();
  const { toast } = useToast();

  const jerseys = [
    {
      id: 1,
      team: "Manchester United",
      type: "Home",
      season: "2023/24",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=400",
      rating: 4.8,
      reviews: 245,
      isNew: true,
      onSale: true,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      team: "Barcelona",
      type: "Away",
      season: "2023/24",
      price: 94.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400",
      rating: 4.9,
      reviews: 189,
      isNew: false,
      onSale: false,
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      team: "Real Madrid",
      type: "Home",
      season: "2023/24",
      price: 92.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=400",
      rating: 4.7,
      reviews: 312,
      isNew: true,
      onSale: false,
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 4,
      team: "Liverpool",
      type: "Third",
      season: "2023/24",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1556798872-43f31c1de1f4?auto=format&fit=crop&q=80&w=400",
      rating: 4.6,
      reviews: 156,
      isNew: false,
      onSale: true,
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      team: "Chelsea",
      type: "Home",
      season: "2023/24",
      price: 87.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&q=80&w=400",
      rating: 4.5,
      reviews: 203,
      isNew: false,
      onSale: false,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      team: "Arsenal",
      type: "Away",
      season: "2023/24",
      price: 84.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=400",
      rating: 4.8,
      reviews: 278,
      isNew: true,
      onSale: false,
      sizes: ["S", "M", "L", "XL"]
    }
  ];

  const handleAddToCart = (jersey: any) => {
    const size = selectedSize[jersey.id] || 'M';
    addItem({
      id: `jersey-${jersey.id}-${size}`,
      type: 'jersey',
      name: `${jersey.team} ${jersey.type} Jersey`,
      price: jersey.price,
      image: jersey.image,
      size: size
    });
    
    toast({
      title: "Jersey Added to Cart",
      description: `${jersey.team} ${jersey.type} Jersey (Size ${size}) added successfully!`,
    });
  };

  const categories = ["All", "Premier League", "La Liga", "Champions League", "National Teams"];

  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Hero Section */}
      <div className="bg-mechitv-bg-light py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <Shirt className="h-12 w-12 text-mechitv-accent mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Jersey Store</h1>
            <p className="text-muted-foreground max-w-2xl">
              Official jerseys from your favorite teams. Authentic quality, 
              fast shipping, and the best prices guaranteed.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for teams, players, or jerseys..." 
                  className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-mechitv-accent text-mechitv-accent">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Tabs */}
        <Tabs defaultValue="All" className="w-full mb-8">
          <TabsList className="bg-mechitv-bg/50 mb-6 w-full flex overflow-x-auto justify-start">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jerseys.map((jersey) => (
                  <Card key={jersey.id} className="bg-mechitv-bg-light border-border overflow-hidden group">
                    <div className="relative">
                      <img 
                        src={jersey.image} 
                        alt={`${jersey.team} ${jersey.type} Jersey`} 
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {jersey.isNew && (
                          <Badge className="bg-green-500 text-white">NEW</Badge>
                        )}
                        {jersey.onSale && (
                          <Badge className="bg-red-500 text-white">SALE</Badge>
                        )}
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-white mb-1">{jersey.team}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {jersey.type} Kit • {jersey.season}
                      </p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground ml-1">
                            {jersey.rating} ({jersey.reviews})
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-mechitv-accent">
                            ${jersey.price}
                          </span>
                          {jersey.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              ${jersey.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <Select 
                          value={selectedSize[jersey.id] || 'M'} 
                          onValueChange={(size) => setSelectedSize(prev => ({...prev, [jersey.id]: size}))}
                        >
                          <SelectTrigger className="bg-mechitv-bg border-border text-white">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            {jersey.sizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button 
                        className="w-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90"
                        onClick={() => handleAddToCart(jersey)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Features Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <Truck className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground text-sm">
                Free worldwide shipping on orders over $75. Fast and reliable delivery.
              </p>
            </Card>
            
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <Shield className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Authentic Jerseys</h3>
              <p className="text-muted-foreground text-sm">
                100% authentic jerseys sourced directly from official suppliers.
              </p>
            </Card>
            
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <RotateCcw className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground text-sm">
                30-day hassle-free returns and exchanges. Your satisfaction guaranteed.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerseyStorePage;
