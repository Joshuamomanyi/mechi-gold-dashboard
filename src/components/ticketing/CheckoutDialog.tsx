import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { PaymentDialog } from "./PaymentDialog";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  match: {
    id: number;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    venue: string;
    competition: string;
    ticketPrices: Array<{
      category: string;
      price: number;
      available: number;
    }>;
  };
}

export const CheckoutDialog = ({ open, onOpenChange, match }: CheckoutDialogProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showPayment, setShowPayment] = useState(false);

  const updateQuantity = (category: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [category]: Math.max(0, (prev[category] || 0) + change)
    }));
  };

  const getTotalAmount = () => {
    return match.ticketPrices.reduce((total, ticket) => {
      const quantity = quantities[ticket.category] || 0;
      return total + (ticket.price * quantity);
    }, 0);
  };

  const getTotalQuantity = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  const handleCheckout = () => {
    if (getTotalQuantity() > 0) {
      setShowPayment(true);
    }
  };

  return (
    <>
      <Dialog open={open && !showPayment} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gray-100 text-gray-900 max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onOpenChange(false)}
                className="text-gray-600 hover:bg-gray-200"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-gray-900">Check Out</DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {/* Event Info */}
            <div className="text-center space-y-2">
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                TICKET ENTRY AND SELECTION
              </Badge>
              <h3 className="font-bold text-lg">{match.homeTeam.toUpperCase()} VS {match.awayTeam.toUpperCase()}</h3>
              <p className="text-sm text-gray-600">TICKETS AVAILABLE FOR THE MATCH</p>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-200 rounded p-1">
              <Button variant="ghost" className="flex-1 bg-white shadow-sm text-sm">
                Ticket
              </Button>
              <Button variant="ghost" className="flex-1 text-sm text-gray-600">
                Info
              </Button>
              <Button variant="ghost" className="flex-1 text-sm text-gray-600">
                Venue
              </Button>
            </div>

            {/* Ticket Selection */}
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-gray-600 px-2">
                <span>TICKET</span>
                <span className="text-center">PRICE</span>
                <span className="text-center">QUANTITY</span>
                <span className="text-center">TOTAL</span>
              </div>

              {match.ticketPrices.map((ticket) => {
                const quantity = quantities[ticket.category] || 0;
                const total = ticket.price * quantity;
                
                return (
                  <div key={ticket.category} className="space-y-2">
                    <div className="grid grid-cols-4 gap-2 items-center">
                      <div>
                        <p className="font-semibold text-sm">{ticket.category.toUpperCase()}</p>
                        <p className="text-xs text-gray-500">Regular {ticket.category}</p>
                      </div>
                      <div className="text-center font-semibold">
                        {ticket.price}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(ticket.category, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(ticket.category, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-center font-semibold">
                        {total}
                      </div>
                    </div>
                    <Separator />
                  </div>
                );
              })}

              {/* Total */}
              <div className="bg-gray-200 p-3 rounded">
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span>KES {getTotalAmount()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                onClick={handleCheckout}
                disabled={getTotalQuantity() === 0}
              >
                Check Out
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PaymentDialog 
        open={showPayment}
        onOpenChange={setShowPayment}
        onBack={() => setShowPayment(false)}
        match={match}
        selectedTickets={quantities}
        totalAmount={getTotalAmount()}
      />
    </>
  );
};