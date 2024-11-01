"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cartStore } from "@/shared/stores/Cart";
import { ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const addToCart = cartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: 1, // Asegúrate de cambiar esto según el ID real del producto
      name: "Roble Americano",
      price: 89.99,
      image: "roble-americano.jpg",
      quantity: quantity,
    });
  };

  return (
    <main className="flex-grow container mx-auto pt-10">
      <div className="flex items-center mb-8">
        <Link
          href="/categorias"
          className="text-[#3E2723] hover:underline flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver a categorias
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Roble Americano"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#3E2723] product-name">
            Roble Americano
          </h1>
          <p className="text-xl mb-4 text-primary font-semibold">€89.99 / m²</p>
          <p className="text-gray-700 mb-6">
            El Roble Americano es una madera dura de gran calidad, conocida por
            su durabilidad y hermoso veteado. Ideal para muebles, suelos y
            carpintería de alta gama. Su color varía de marrón claro a medio,
            con un tono ligeramente rosado.
          </p>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-[#3E2723]">
                Especificaciones
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Densidad: 0.75 g/cm³</li>
                <li>Dureza Janka: 1,360 lbf (6,050 N)</li>
                <li>Estabilidad dimensional: Excelente</li>
                <li>Resistencia a la putrefacción: Moderada</li>
                <li>Trabajabilidad: Buena</li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex items-center space-x-4 mb-6">
            <Label htmlFor="cantidad" className="text-[#3E2723] font-semibold">
              Cantidad:
            </Label>
            <Input
              type="number"
              id="cantidad"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
              className="w-20 bg-white border-[#3E2723]"
            />
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full text-white text-lg py-6"
          >
            Añadir al Carrito
          </Button>
        </div>
      </div>
    </main>
  );
}
