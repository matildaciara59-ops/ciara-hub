import PackageCard from "./PackageCard";

const packages = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for getting started",
    features: [
      "Basic consultation session",
      "Personalized action plan",
      "Email support for 7 days",
      "Access to starter resources",
    ],
  },
  {
    name: "Essential",
    price: "$249",
    description: "For growing ambitions",
    features: [
      "Everything in Starter",
      "2 strategy sessions",
      "Priority email support",
      "Custom templates pack",
      "30-day follow-up support",
    ],
  },
  {
    name: "Professional",
    price: "$499",
    description: "Comprehensive solutions",
    features: [
      "Everything in Essential",
      "4 in-depth sessions",
      "Implementation guidance",
      "Resource library access",
      "60-day support",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$799",
    description: "Enhanced experience",
    features: [
      "Everything in Professional",
      "6 premium sessions",
      "VIP support access",
      "Advanced tools & resources",
      "90-day partnership",
      "Monthly check-ins",
    ],
  },
  {
    name: "Elite",
    price: "$1,299",
    description: "Ultimate transformation",
    features: [
      "Everything in Premium",
      "Unlimited sessions",
      "Direct access line",
      "Full resource suite",
      "6-month commitment",
      "Quarterly reviews",
      "Exclusive community access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for organizations",
    features: [
      "Fully customized program",
      "Team training sessions",
      "Dedicated account manager",
      "Custom integrations",
      "Annual partnership",
      "On-site workshops",
      "White-glove service",
    ],
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-gold">Perfect Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the package that best fits your needs. Each tier is designed to deliver 
            exceptional value and help you achieve your goals.
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
