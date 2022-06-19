import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
import ProductDashboard from "./components/productDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product";

function App() {
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
