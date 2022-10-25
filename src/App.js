import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
