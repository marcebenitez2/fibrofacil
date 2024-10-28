import CardProduct from "@/shared/components/CardProduct";

export default async function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = await params;
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
    <div className="container mx-auto pt-20">
      <h1 className="text-4xl font-bold mb-8 text-[#3E2723]">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
