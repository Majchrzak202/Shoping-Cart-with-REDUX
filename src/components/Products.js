import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Typography, Card, Button } from "@mui/material";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const { items, status } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  const addToCartHandler = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Grid style={{padding: 20}} container spacing={2}>
          {items.map((item) => (
            <Grid xs={12} sm={6} md={4} lg={4} xl={4} key={item.id} item>
              <Card style={{padding: 30}}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                  }}
                >
                  <Typography>{item.name}</Typography>
                  <img style={{width: 200, height: 200}} src={item.img} alt={item.name} />
                  <Typography>${item.price}</Typography>
                  <Typography>{item.description}</Typography>
                  <Button onClick={() => addToCartHandler(item)} style={{marginTop: 10 }} variant='contained'>Add to Cart</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
