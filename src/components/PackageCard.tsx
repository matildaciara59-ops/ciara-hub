import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PackageCard = ({ name, price, description, features, popular, index }: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card rounded-2xl p-8 shadow-card card-hover border border-border",
        popular && "border-accent ring-2 ring-accent/20"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-soft">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      
      <div className="text-center mb-8">
        <span className="font-heading text-5xl font-bold text-foreground">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground ml-1">/package</span>}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? "gold" : "heroOutline"} 
        size="lg" 
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PackageCard;
