import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-white">
      <div className="container flex h-16 items-center mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-brown-800">FibroFácil</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium ml-6">
          <Link
            href="/categorias"
            className="text-brown-700 hover:text-brown-900"
          >
            Categorías
          </Link>
          <Link
            href="/pedido-personalizado"
            className="text-brown-700 hover:text-brown-900"
          >
            Pedido Personalizado
          </Link>
        </nav>
        <div className="flex items-center space-x-4 ml-auto">
          <Button
            variant="outline"
            size="icon"
            className="text-brown-600 hover:text-brown-800"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-brown-600 hover:text-brown-800"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;