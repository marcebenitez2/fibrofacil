import React from "react";
import TableCard from "@/shared/components/TableCard";
import ResumeCart from "@/shared/components/ResumeCart";

export default function CartPage() {
  return (
    <main className="flex-grow container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#3E2723]">Carrito</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <TableCard />
        <ResumeCart />
      </div>
    </main>
  );
}
