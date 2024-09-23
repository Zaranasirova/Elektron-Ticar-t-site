import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/productsSlice";

const ProductList = () => {
  const dispatch=useDispatch();
  const product= useSelector((state)=>state.product)
  console.log(product);
  useEffect(() => {
    dispatch(getAllProducts())
  }, []);
  return <div>dabwdj</div>;
};

export default ProductList;
