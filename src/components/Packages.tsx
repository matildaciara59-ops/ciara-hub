import PackageCard from "./PackageCard";
import stephanieImg from "@/assets/stephanie.jpg";
import beckyImg from "@/assets/becky.jpg";
import joyImg from "@/assets/joy.jpg";
import gloriaImg from "@/assets/gloria.jpg";
import merrizahImg from "@/assets/merrizah.jpg";
import fidelisImg from "@/assets/fidelis.jpg";
import roseImg from "@/assets/rose.jpg";
import merryImg from "@/assets/merry.jpg";
import neddyImg from "@/assets/neddy.jpg";
import laurahImg from "@/assets/laurah.jpg";
import eacubethImg from "@/assets/eacubeth.jpg";
import velmahImg from "@/assets/velmah.jpg";

const packages = [
  {
    name: "Stephanie",
    price: "KSh 199",
    description: "Beautiful connection awaits",
    image: stephanieImg,
  },
  {
    name: "Becky",
    price: "KSh 200",
    description: "Joyful moments together",
    image: beckyImg,
  },
  {
    name: "Joy",
    price: "KSh 150",
    description: "Sweet companionship",
    image: joyImg,
  },
  {
    name: "Gloria",
    price: "KSh 299",
    description: "Elegant and charming",
    image: gloriaImg,
  },
  {
    name: "Merrizah",
    price: "KSh 200",
    description: "Unique and special",
    image: merrizahImg,
  },
  {
    name: "Fidelis",
    price: "KSh 150",
    description: "Warm and caring",
    image: fidelisImg,
  },
  {
    name: "Rose",
    price: "KSh 199",
    description: "Graceful and lovely",
    image: roseImg,
  },
  {
    name: "Merry",
    price: "KSh 159",
    description: "Cheerful spirit",
    image: merryImg,
  },
  {
    name: "Neddy",
    price: "KSh 200",
    description: "Kind and gentle",
    image: neddyImg,
  },
  {
    name: "Laurah",
    price: "KSh 249",
    description: "Sophisticated charm",
    image: laurahImg,
  },
  {
    name: "Eacubeth",
    price: "KSh 200",
    description: "Radiant personality",
    image: eacubethImg,
  },
  {
    name: "Velmah",
    price: "KSh 199",
    description: "Warm and caring",
    image: velmahImg,
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
            Welcome to Ciara Hub for Legit connection
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
