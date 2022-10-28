import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div>
      <Layout>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
