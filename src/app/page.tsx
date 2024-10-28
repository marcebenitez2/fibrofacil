import Categories from "@/shared/components/Categories";
import GridProducts from "@/shared/components/GridProducts";
import Hero from "@/shared/components/Hero";
import Offer from "@/shared/components/Offer";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Offer />
      <Categories />
      <GridProducts />
    </div>
  );
}
