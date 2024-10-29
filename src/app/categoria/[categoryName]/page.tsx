import CardProduct from "@/shared/components/CardProduct";
import { ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export default async function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = await params;
  const products = [
    {
      id: 1,
      name: "Tablero MDF 18mm",
      price: 25.99,
      image: "/placeholder.svg?text=MDF+18mm",
      discount: true,
    },
    {
      id: 2,
      name: "Tablero MDF 12mm",
      price: 20.99,
      image: "/placeholder.svg?text=MDF+12mm",
    },
    {
      id: 3,
      name: "Tablero MDF 6mm",
      price: 15.99,
      image: "/placeholder.svg?text=MDF+6mm",
      discount: true,
    },
    {
      id: 4,
      name: "Lija para madera",
      price: 5.99,
      image: "/placeholder.svg?text=Lija",
    },
    {
      id: 5,
      name: "Pintura para MDF",
      price: 12.99,
      image: "/placeholder.svg?text=Pintura",
      discount: true,
    },
    {
      id: 6,
      name: "Sierra caladora",
      price: 89.99,
      image: "/placeholder.svg?text=Sierra",
    },
  ];

  return (
    <div className="container mx-auto pt-10">
      <div className="flex items-center mb-8">
        <Link
          href="/categorias"
          className="text-[#3E2723] hover:underline flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver a Categorías
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-[#3E2723]">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
