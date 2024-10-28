import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20 px-4 text-center relative">
      <div className="absolute inset-0 bg-brown-900/70"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenido a FibroFácil
        </h1>
        <p className="text-2xl mb-8 text-brown-100">
          Descubre la versatilidad del fibrofacil en cada proyecto
        </p>
        <Button
          size="lg"
          className="font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
        >
          Explora Nuestros Productos
        </Button>
      </div>
    </section>
  );
};

export default Hero;
