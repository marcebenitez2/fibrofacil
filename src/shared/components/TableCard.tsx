"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cartStore } from "../stores/Cart";

const TableCard = () => {
  // Obtener las funciones del store
  const cartProducts = cartStore((state) => state.cart);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);
  const removeItem = cartStore((state) => state.removeItem);

  // Función para manejar el cambio de cantidad mediante el input
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      const product = cartProducts.find((item) => item.id === id);
      if (product) {
        // Ajustar la cantidad directamente
        product.quantity = newQuantity;
      }
    }
  };

  return (
    <div className="md:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Productos en el carrito</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Productos</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={`/placeholder.svg?height=80&width=80`}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>€{product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => decreaseQuantity(product.name)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-16 text-center"
                        min={1}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => increaseQuantity(product.name)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    €{(product.price * product.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(product.name)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TableCard;
