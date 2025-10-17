import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuData = {
  breakfast: [
    { name: "Traditional Sri Lankan Breakfast", description: "Hoppers, sambol, dhal curry, and fresh coconut", price: "LKR 850" },
    { name: "Continental Breakfast", description: "Croissants, fresh fruit, yogurt, and coffee", price: "LKR 950" },
    { name: "Egg Benedict", description: "Poached eggs, hollandaise, toasted muffin", price: "LKR 1,200" },
    { name: "Pancake Stack", description: "Fluffy pancakes with maple syrup and berries", price: "LKR 750" },
  ],
  lunch: [
    { name: "Grilled Fish Plate", description: "Fresh catch with lemon butter, vegetables, rice", price: "LKR 1,450" },
    { name: "Chicken Kottu", description: "Chopped roti with chicken, vegetables, spices", price: "LKR 1,100" },
    { name: "Caesar Salad", description: "Crisp romaine, parmesan, croutons, classic dressing", price: "LKR 950" },
    { name: "Rice & Curry", description: "Traditional Sri Lankan rice with 5 curries", price: "LKR 1,250" },
  ],
  dinner: [
    { name: "Seafood Platter", description: "Grilled prawns, calamari, fish, seasonal vegetables", price: "LKR 2,450" },
    { name: "Lamb Shank", description: "Slow-cooked with rosemary, mashed potatoes", price: "LKR 2,200" },
    { name: "Pasta Carbonara", description: "Creamy pasta with bacon and parmesan", price: "LKR 1,350" },
    { name: "Vegetarian Platter", description: "Grilled vegetables, quinoa, hummus, falafel", price: "LKR 1,450" },
  ],
  coffee: [
    { name: "Espresso", description: "Single shot of our signature blend", price: "LKR 350" },
    { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "LKR 450" },
    { name: "Iced Latte", description: "Chilled espresso with cold milk", price: "LKR 500" },
    { name: "Affogato", description: "Espresso poured over vanilla ice cream", price: "LKR 550" },
  ],
};

const MenuSection = ({ items }: { items: MenuItem[] }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((item, index) => (
      <Card key={index} className="border-border/50 hover:shadow-elegant transition-shadow">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-playfair text-xl font-semibold text-foreground">{item.name}</h3>
            <span className="font-semibold text-secondary">{item.price}</span>
          </div>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted dishes featuring the finest local and international ingredients
          </p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-card">
            <TabsTrigger value="breakfast" className="font-semibold">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch" className="font-semibold">Lunch</TabsTrigger>
            <TabsTrigger value="dinner" className="font-semibold">Dinner</TabsTrigger>
            <TabsTrigger value="coffee" className="font-semibold">Coffee</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breakfast">
            <MenuSection items={menuData.breakfast} />
          </TabsContent>
          
          <TabsContent value="lunch">
            <MenuSection items={menuData.lunch} />
          </TabsContent>
          
          <TabsContent value="dinner">
            <MenuSection items={menuData.dinner} />
          </TabsContent>
          
          <TabsContent value="coffee">
            <MenuSection items={menuData.coffee} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
