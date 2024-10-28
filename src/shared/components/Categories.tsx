import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

const Categories = () => {
  const categories = [
    {
      name: "Bautismo",
      description: "Roble, Nogal, Cerezo y más",
      image: "/api/placeholder/400/400", // Usando placeholder para demostración
      color: "bg-brown-600",
    },
    {
      name: "Juegos",
      description: "Pino, Abeto, Cedro y más",
      image: "/api/placeholder/400/400", // Usando placeholder para demostración
      color: "bg-brown-500",
    },
    {
      name: "Souvenir",
      description: "Pino, Abeto, Cedro y más",
      image: "/api/placeholder/400/400", // Usando placeholder para demostración
      color: "bg-brown-500",
    },
  ];

  return (
    <section id="categorias" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-brown-800">
            Categorías Más Buscadas
          </h2>
          <p className="text-brown-600 mt-2">
            Explora nuestras categorías populares de productos
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <CategoryCard category={category} key={index} />
          ))}
        </div>
        <div className="text-center">
          <Link href={"/categorias"}>
            <Button className="px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Ver Todas las Categorías <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
