import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f9f7f5" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
