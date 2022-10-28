import React from "react";
import { Box, AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </Typography>
          <Badge badgeContent={cartTotalQuantity} color="primary">
            <Link to='/cart'>
            <AddShoppingCart color="action" />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
