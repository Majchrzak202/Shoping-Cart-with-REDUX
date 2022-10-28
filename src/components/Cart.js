import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Typography, Divider } from "@mui/material";
import { removeItem } from "../features/cartSlice";
import { decreaseQuantity } from "../features/cartSlice";
import { addToCart } from "../features/cartSlice";
import { clearCart } from "../features/cartSlice";
import { getTotals } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  console.log(cartItems);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);

  const removeProductHandler = (item) => {
    dispatch(removeItem(item));
  };

  const decreaseQuantityHandler = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const increaseQuantityHandler = (item) => {
    dispatch(addToCart(item));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography>Items in Cart :{cartTotalQuantity}</Typography>
      </Box>
      <Box
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          width: "80%",
        }}
      >
        {cartItems.map((item) => (
          <Box
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              padding: 20,
            }}
          >
            <Typography>{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Button onClick={() => increaseQuantityHandler(item)}>+</Button>
              <Typography>{item.cartQuantity}</Typography>
              <Button onClick={() => decreaseQuantityHandler(item)}>-</Button>
            </Box>

            <img
              alt={item.name}
              style={{ width: 100, height: 100 }}
              src={item.img}
            />
            <Divider />
            <Button onClick={() => removeProductHandler(item)}>
              Remove item{" "}
            </Button>
          </Box>
        ))}
      </Box>
      <Typography>${cartTotalAmount.toFixed(2)}</Typography>
      <Button onClick={clearCartHandler}>Clear Cart</Button>
    </Box>
  );
};

export default Cart;
