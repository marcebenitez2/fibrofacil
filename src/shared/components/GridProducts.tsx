import React from "react";
import CardProduct from "./CardProduct";

const GridProducts = () => {
  const products = [
    {
      name: "Tablero MDF 18mm",
      price: 25.99,
      image: "/placeholder.svg?text=MDF+18mm",
      discount: true,
    },
    {
      name: "Tablero MDF 12mm",
      price: 20.99,
      image: "/placeholder.svg?text=MDF+12mm",
    },
    {
      name: "Tablero MDF 6mm",
      price: 15.99,
      image: "/placeholder.svg?text=MDF+6mm",
      discount: true,
    },
    {
      name: "Lija para madera",
      price: 5.99,
      image: "/placeholder.svg?text=Lija",
    },
    {
      name: "Pintura para MDF",
      price: 12.99,
      image: "/placeholder.svg?text=Pintura",
      discount: true,
    },
    {
      name: "Sierra caladora",
      price: 89.99,
      image: "/placeholder.svg?text=Sierra",
    },
  ];

  return (
    <section id="productos" className="py-16 px-4 bg-brown-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-brown-800 text-center">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <CardProduct product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridProducts;
