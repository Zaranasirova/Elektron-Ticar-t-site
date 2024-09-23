import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/productsSlice";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  console.log(product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="cartList">
      {product.map((item) => (
        <Product data={item} key={item.id}/>
      ))}
    </div>
  );
};

export default ProductList;
