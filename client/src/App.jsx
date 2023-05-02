import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";

import React from 'react'
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";
import Layout from "./layout/layout";
import Login from "./pages/login";
import Cart from "./pages/cart";
import { useEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route index element={<Navigate to="home" />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="product" element={<Product />} />
            <Route exact path="product/:id" element={<ProductDetail />} />
            <Route exact path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>


  )
}

export default App
