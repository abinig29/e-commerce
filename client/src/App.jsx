import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import React from 'react'
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";
import Layout from "./layout/layout";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Navigate to="home" />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="product" element={<Product />} />
            <Route exact path="product/:id" element={<ProductDetail />} />
            <Route exact path="cart" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>


  )
}

export default App
