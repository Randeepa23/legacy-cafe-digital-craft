import interiorImage from "@/assets/interior-ambiance.jpg";
import breakfastImage from "@/assets/breakfast-spread.jpg";
import coffeeImage from "@/assets/coffee-art.jpg";
import heroImage from "@/assets/hero-dining.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Signature dish at Legacy Cafe", category: "Food" },
    { src: coffeeImage, alt: "Artisanal coffee preparation", category: "Coffee" },
    { src: interiorImage, alt: "Elegant restaurant interior", category: "Ambiance" },
    { src: breakfastImage, alt: "Traditional Sri Lankan breakfast", category: "Food" },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience Legacy
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our culinary artistry, coffee craftsmanship, and inviting atmosphere
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-500"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
