import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://redux-shopping-cart-d9507-default-rtdb.firebaseio.com/fruits.json"
    );
    const loadedProducts = [];

    for (const key in response.data) {
      loadedProducts.push({
        name: response.data[key].name,
        id: response.data[key].id,
        price: response.data[key].price,
        img: response.data[key].img,
        description: response.data[key].description,
      });
    }
    console.log(loadedProducts);
    return loadedProducts;
  }
);

const productSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "Pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "fulfiled";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
