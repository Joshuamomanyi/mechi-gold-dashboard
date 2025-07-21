import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack: () => void;
  match: {
    id: number;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    venue: string;
  };
  selectedTickets: Record<string, number>;
  totalAmount: number;
}

export const PaymentDialog = ({ 
  open, 
  onOpenChange, 
  onBack, 
  match, 
  selectedTickets, 
  totalAmount 
}: PaymentDialogProps) => {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handlePay = () => {
    if (!acceptTerms) {
      toast({
        title: "Terms & Conditions Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    if (!phoneNumber || !name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Add tickets to cart
    Object.entries(selectedTickets).forEach(([category, quantity]) => {
      if (quantity > 0) {
        for (let i = 0; i < quantity; i++) {
          addItem({
            id: `ticket-${match.id}-${category}-${Date.now()}-${i}`,
            type: 'ticket',
            name: `${match.homeTeam} vs ${match.awayTeam} - ${category}`,
            price: Math.floor(totalAmount / Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0)),
            match: `${match.homeTeam} vs ${match.awayTeam}`,
            date: `${match.date} at ${match.time}`,
            venue: match.venue
          });
        }
      }
    });

    toast({
      title: "Payment Initiated",
      description: `Payment of KES ${totalAmount} initiated via ${paymentMethod.toUpperCase()}. Tickets will be sent via SMS.`,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-100 text-gray-900 max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onBack}
              className="text-gray-600 hover:bg-gray-200"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-gray-900">Check Out</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Payment Method */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mpesa" id="mpesa" />
                <Label htmlFor="mpesa" className="text-sm">M-PESA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="text-sm">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="text-sm">Bank Transfer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold">
              Enter Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="254 | 712345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold">
              Enter Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              Enter Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Promo Code */}
          <div className="space-y-2">
            <Label htmlFor="promo" className="text-sm font-semibold">
              Promo Code
            </Label>
            <div className="flex gap-2">
              <Input
                id="promo"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-white"
              />
              <span className="text-sm self-center">Receive Ticket via</span>
              <Button variant="outline" size="sm">SMS</Button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Terms & Conditions</Label>
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-xs text-gray-600 leading-tight">
                I am reading and accepting your Booking's Terms & Privacy, and am acknowledging that you purchase all products as 
                is and under established online documenters found under the verified policy section.
              </Label>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gray-200 p-3 rounded">
            <div className="flex justify-between items-center font-bold">
              <span>Total: KES {totalAmount}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="destructive" 
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Back
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handlePay}
            >
              Pay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};