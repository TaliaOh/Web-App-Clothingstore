import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryCard from "./components/Category/CategoryCard";
import products from "./data";
import CategoryItems from "./components/Card/CategoryItems";
import ProductCard from "./components/Products/ProductCard";
import ProductPage from "./components/Products/ProductPage";
import SigninPage from "./components/Profile/SigninPage";
import SignUpPage from "./components/Profile/SignupPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/:title"
          element={<CategoryItems categoryItems={products} />}
        />
        <Route
          path="/products/:productId"
          element={<ProductPage products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
