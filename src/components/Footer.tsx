const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Legacy Cafe</h3>
            <p className="text-primary-foreground/80">
              Serving excellence in dining and coffee since our establishment. 
              A heritage of flavor in the heart of Negombo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>463, Colombo Road</li>
              <li>Negombo, Sri Lanka</li>
              <li>
                <a href="tel:0762000105" className="hover:text-primary-foreground transition-colors">
                  076 200 0105
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Legacy Cafe & Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
