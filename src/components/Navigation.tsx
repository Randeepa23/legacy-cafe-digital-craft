import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="font-playfair text-2xl md:text-3xl font-bold text-primary-foreground">
            Legacy Cafe
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open('tel:0762000105', '_self')}
            >
              Book A Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                onClick={() => {
                  setIsOpen(false);
                  window.open('tel:0762000105', '_self');
                }}
              >
                Book A Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
