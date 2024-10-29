"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { cartStore } from "../stores/Cart"; // Asegúrate de que la ruta sea correcta

const ResumeCart = () => {
  const total = cartStore((state) => state.getTotalPrice()); // Usar la función de total del store

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Resumen del pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>€{total.toFixed(2)}</span> {/* Muestra el total */}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white">
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResumeCart;
