import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Gift, Heart } from "lucide-react";

const Offer = () => {
  const offers = [
    {
      title: "Pack Eventos",
      description: "30 souvenirs personalizados",
      price: "$9999",
      icon: Gift,
    },
    {
      title: "Pack Bodas",
      description: "Set decoración completo",
      price: "$14999",
      icon: Heart,
    },
    {
      title: "Pack Premium",
      description: "Decoración personalizada",
      price: "$19999",
      icon: Star,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-orange-50/50"></div>
      
      {/* Decoración esquina */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-900/5 rounded-bl-full -z-0"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Ofertas Especiales
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Descubre nuestras promociones exclusivas para hacer tu evento aún más especial
          </p>
        </div>

        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {offers.map((offer, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-8">
                      <div className="aspect-square flex flex-col items-center justify-center text-center relative">
                        {/* Círculo decorativo */}
                        <div className="absolute inset-4 rounded-full bg-amber-100/50 transition-transform duration-300 group-hover:scale-95"></div>
                        
                        {/* Icono */}
                        <offer.icon className="w-16 h-16 text-amber-700 mb-6 relative" />
                        
                        {/* Contenido */}
                        <h3 className="text-2xl font-bold text-amber-900 mb-2 relative">
                          {offer.title}
                        </h3>
                        <p className="text-amber-700 mb-4 relative">
                          {offer.description}
                        </p>
                        <span className="text-3xl font-bold text-amber-900 relative">
                          {offer.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-amber-900 border-amber-200 hover:bg-amber-100" />
            <CarouselNext className="text-amber-900 border-amber-200 hover:bg-amber-100" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Offer;