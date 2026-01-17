import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  index: number;
}

const PackageCard = ({ name, price, description, image, index }: PackageCardProps) => {
  const handleConnect = () => {
    const message = encodeURIComponent(`Hi, I'm interested in connecting with ${name} from Ciara Hub.`);
    window.open(`https://wa.me/254106370633?text=${message}`, '_blank');
  };

  return (
    <div 
      className={cn(
        "relative bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        
        <div className="text-center mb-6">
          <span className="font-heading text-3xl font-bold text-accent">{price}</span>
          <span className="text-muted-foreground ml-1">/connection</span>
        </div>
        
        <Button 
          variant="gold" 
          size="lg" 
          className="w-full"
          onClick={handleConnect}
        >
          Connect Now
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
