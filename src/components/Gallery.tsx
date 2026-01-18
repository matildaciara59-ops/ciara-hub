import stephanieImg from "@/assets/stephanie.jpg";
import beckyImg from "@/assets/becky.jpg";
import joyImg from "@/assets/joy.jpg";
import gloriaImg from "@/assets/gloria.jpg";
import merrizahImg from "@/assets/merrizah.jpg";
import fidelisImg from "@/assets/fidelis.jpg";

const galleryImages = [
  { id: 1, image: stephanieImg, alt: "Stephanie" },
  { id: 2, image: beckyImg, alt: "Becky" },
  { id: 3, image: joyImg, alt: "Joy" },
  { id: 4, image: gloriaImg, alt: "Gloria" },
  { id: 5, image: merrizahImg, alt: "Merrizah" },
  { id: 6, image: fidelisImg, alt: "Fidelis" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our beautiful collection of moments and connections.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, index) => (
            <div 
              key={item.id} 
              className="relative aspect-square overflow-hidden rounded-xl card-hover bg-card shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
