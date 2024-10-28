import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brown-800 py-12 text-brown-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Sobre Nosotros
            </h3>
            <p>
              FibroFácil es tu tienda especializada en productos de fibrofacil
              (MDF) de alta calidad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#categorias"
                  className="hover:text-white transition-colors"
                >
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  href="#productos"
                  className="hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/pedido-personalizado"
                  className="hover:text-white transition-colors"
                >
                  Pedido Personalizado
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Contacto</h3>
            <p>Email: info@fibrofacil.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brown-700 text-center text-muted-foreground">
          <p>&copy; 2024 FibroFácil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
