import PackageCard from "./PackageCard";

const packages = [
  {
    name: "Rose",
    price: "KSh 499",
    description: "Beautiful connection awaits",
    image: "/placeholder.svg",
  },
  {
    name: "Merry",
    price: "KSh 499",
    description: "Joyful moments together",
    image: "/placeholder.svg",
  },
  {
    name: "Neddy",
    price: "KSh 499",
    description: "Sweet companionship",
    image: "/placeholder.svg",
  },
  {
    name: "Laurah",
    price: "KSh 499",
    description: "Elegant and charming",
    image: "/placeholder.svg",
  },
  {
    name: "Eacubeth",
    price: "KSh 499",
    description: "Unique and special",
    image: "/placeholder.svg",
  },
  {
    name: "Velmah",
    price: "KSh 499",
    description: "Warm and caring",
    image: "/placeholder.svg",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-gold">Connection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect connection that matches your preferences. 
            Each connection is designed to bring you joy and companionship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={pkg.name} 
              {...pkg} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
