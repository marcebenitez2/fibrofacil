import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Offer = () => {
  return (
    <section className="py-16 px-4 bg-brown-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-brown-800 text-center">
          Promociones Especiales
        </h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white border-brown-200 shadow-md">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold text-brown-700">
                        Promoción {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Offer;
