import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Header from "./components/header";
import React, { useEffect } from "react";
import ProductDashboard from "./components/productDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product";
import Cart from "./components/cart/cart";
import { useDispatch } from "react-redux";
import { setCategories } from "./components/redux/dispatcher";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const jsonres = await res.json();
      dispatch(setCategories(jsonres));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route
            path="/category/:category"
            element={<ProductDashboard />}
          ></Route>
          <Route path="product/:productID" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
