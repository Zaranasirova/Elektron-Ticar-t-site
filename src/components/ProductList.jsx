import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/productsSlice";

const ProductList = () => {
  const dispatch=useDispatch();
  const product = useSelector((state) => state.products.product);
  console.log(product)
  useEffect(() => {
    dispatch(getAllProducts())
  }, []);
  return <div>
    {
      product.map((item)=>(
        <p>Name:{item.title}</p>
      ))
    }
  </div>;
};

export default ProductList;
