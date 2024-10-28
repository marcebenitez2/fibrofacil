import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Percent, ShoppingCart } from "lucide-react";
import React from "react";
import { IProduct } from "../types/IProduct";
import Link from "next/link";

const CardProduct = ({ product }: { product: IProduct }) => {
  return (
    <Link href={"/producto/asd"}>
      <Card className="bg-white border hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden">
        {product.discount && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full animate-pulse">
              <Percent className="w-3 h-3 inline mr-1" />
              Oferta
            </Badge>
          </div>
        )}
        <CardContent className="p-4 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="font-semibold mb-2 text-brown-800">{product.name}</h3>
          <p className="text-2xl font-bold text-brown-600">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full ">
            <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
          </Button>
          {product.discount && (
            <div className="mt-2 bg-red-100 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">
              <strong>10% off</strong> comprando más de 10 unidades
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardProduct;
