import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Smartphone, Wrench, Watch } from "lucide-react";

const services = [
  {
    icon: Diamond,
    title: "Jewelry & Precious Metals",
    description: "Expert appraisals for gold, silver, diamonds, and fine jewelry. Best prices in Florida.",
  },
  {
    icon: Smartphone,
    title: "Electronics & Gadgets",
    description: "Fair market value for smartphones, laptops, gaming consoles, and more.",
  },
  {
    icon: Watch,
    title: "Luxury Watches",
    description: "Specialized in Rolex, Omega, and other luxury timepieces. Authentication guaranteed.",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    description: "Professional and power tools accepted. Quick cash for quality equipment.",
  },
];

export function Services() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What We Buy, Sell & Pawn
          </h2>
          <p className="text-lg text-muted-foreground">
            Get the best value for your items at our Florida locations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}