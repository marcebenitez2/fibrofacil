import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CategoryCard from "@/shared/components/CategoryCard";

const CategoriesPage = () => {
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
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-neutral-800 text-center">
        Explora Nuestras <span className="categorias">Categorías</span> de
        Madera
      </h1>

      <div className="mb-12 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar categorías..."
            className="pl-10 bg-white border-neutral-800 rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, i) => (
          <CategoryCard category={category} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
