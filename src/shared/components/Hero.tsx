import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Fondo con efecto de madera suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCI+CiAgPHBhdGggZD0iTTAgMGg3MHY3MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDB2NzBNMTcuNSAwdjcwTTM1IDB2NzBNNTIuNSAwdjcwTTcwIDB2NzBNMCAwaDcwTTAgMTcuNWg3ME0wIDM1aDcwTTAgNTIuNWg3ME0wIDcwaDcwIiBzdHJva2U9IiNiYTc5NGQiIHN0cm9rZS13aWR0aD0iLjIiLz4KPC9zdmc+')] opacity-5"></div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-amber-900 tracking-tight">
          FibroFácil
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-amber-800 mb-8 italic">
          &quot;Donde cada pieza cuenta una historia única para tu evento especial&quot;
        </p>

        <p className="text-lg sm:text-xl text-amber-700 mb-12 max-w-2xl mx-auto">
          Creamos decoraciones y souvenirs artesanales que transforman momentos en recuerdos inolvidables
        </p>

        <Button
          size="lg"
          className="bg-amber-900 hover:bg-amber-800 text-amber-50 px-8 py-6 rounded-full font-medium text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
        >
          Descubre Nuestras Creaciones
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Decoraciones en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-900/5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-900/5 rounded-tl-full"></div>
    </section>
  );
};

export default Hero;