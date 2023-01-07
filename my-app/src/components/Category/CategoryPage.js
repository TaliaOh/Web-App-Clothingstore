import React from "react";
import products from "../../data";
import CategoryCard from "./CategoryCard";
import CategorySection from "./CategorySection";

const CategoryPage = () => {
  return (
    <div>
      <h1>Categories</h1>

      <CategorySection></CategorySection>
    </div>
  );
};

export default CategoryPage;
