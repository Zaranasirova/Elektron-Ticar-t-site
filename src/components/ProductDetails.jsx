import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProducts } from "../redux/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const singleProductState = useSelector((state) => state.products.singleProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    getProductById()
  }, [])

  const getProductById = () => {
    product && product.map((product) => {
      if (product.id == id) {
        dispatch(singleProducts(product))
      }
    })
  }
  return <div>name:{singleProductState.title}</div>;
};

export default ProductDetails;





