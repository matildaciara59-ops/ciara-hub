import roseImg from "@/assets/rose.jpg";
import merryImg from "@/assets/merry.jpg";
import neddyImg from "@/assets/neddy.jpg";
import laurahImg from "@/assets/laurah.jpg";
import eacubethImg from "@/assets/eacubeth.jpg";
import velmahImg from "@/assets/velmah.jpg";

const galleryImages = [
  { id: 1, image: roseImg, alt: "Rose" },
  { id: 2, image: merryImg, alt: "Merry" },
  { id: 3, image: neddyImg, alt: "Neddy" },
  { id: 4, image: laurahImg, alt: "Laurah" },
  { id: 5, image: eacubethImg, alt: "Eacubeth" },
  { id: 6, image: velmahImg, alt: "Velmah" },
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
