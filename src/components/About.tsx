import coffeeImage from "@/assets/coffee-art.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={coffeeImage} 
                alt="Artisanal coffee at Legacy Cafe" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy of Excellence
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6" />
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nestled in the heart of Negombo on Colombo Road, Legacy Cafe & Restaurant has been 
              a cornerstone of exceptional dining and artisanal coffee culture in Sri Lanka.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to quality begins with carefully sourced local ingredients and extends 
              to every cup of coffee we craft. We blend traditional Sri Lankan hospitality with 
              contemporary culinary excellence, creating an unforgettable dining experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking a morning coffee ritual, a leisurely lunch, or an elegant 
              dinner, Legacy Cafe welcomes you to become part of our story.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Fresh Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
