import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located in the heart of Negombo, ready to serve you exceptional dining experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                463, Colombo Road<br />
                Negombo, Sri Lanka
              </p>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Phone</h3>
              <a 
                href="tel:0762000105" 
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                076 200 0105
              </a>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon - Sun<br />
                7:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-elegant">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3756773652894!2d79.83571887475927!3d7.208819492771784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c49dd1111%3A0x1111111111111111!2sColombo%20Road%2C%20Negombo!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Legacy Cafe & Restaurant Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
