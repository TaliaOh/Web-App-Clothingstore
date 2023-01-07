import React from "react";
import products from "../../data";
import TitleDivider from "../Ui/TitleDivider";
import Container from "@mui/system";
import ProductCard from "../Products/ProductCard";
import Grid from "@mui/material";
import CategoryCard from "./CategoryCard";
const CategoryPage = () => {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h1>Categories</h1>

      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </div>
  );
};

export default CategoryPage;
