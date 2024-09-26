import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  singleProducts: {},
  loading: false,
  counter: 1,

};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    singleProducts: (state, action) => {
      state.singleProducts = action.payload
    },

    increment: (state) => {
      state.counter = state.counter + 1
    },
    decrement: (state) => {
      if (state.counter > 1) {
        state.counter = state.counter - 1
      }
    }


  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export const { singleProducts, decrement, increment } = productSlice.actions;

export default productSlice.reducer;
