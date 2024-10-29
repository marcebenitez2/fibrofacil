import { Button } from "@/components/ui/button";
import React from "react";
import { ICategory } from "../types/ICategory";
import { Link } from "next-view-transitions";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <Link href={"/categoria/asd"}>
      <div
        key={category.name}
        className={`relative group overflow-hidden rounded-lg shadow-lg h-64 ${category.color} transition-transform duration-300 hover:scale-105`}
      >
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {category.name}
          </h3>
          <p className="text-sm mb-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category.description}
          </p>
          <Button className="w-full bg-white hover:bg-neutral-100 text-neutral-800">
            Explorar
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
