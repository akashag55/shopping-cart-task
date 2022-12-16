import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
