import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProducts } from "../redux/productsSlice";
import { increment } from "../redux/productsSlice";
import { decrement } from "../redux/productsSlice";


const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const singleProductState = useSelector((state) => state.products.singleProducts)
  const dispatch = useDispatch()
  const { title, image, category, description, price } = singleProductState;
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

  const counter = useSelector((state) => state.products.counter);



  return <div className="product-details">

    <div className="details-left-side">
      <img src={image} alt="Productimage" />
    </div>
    <div className="details-right-side">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="price">{price}</span>
      <div className="counter-wrapper">
        <span className="counter" onClick={()=>dispatch(decrement())}>-</span>
        <span className="counter-price">{counter}</span>
        <span className="counter" onClick={()=>dispatch(increment())}>+</span>
      </div>

    </div>
  </div>;
};

export default ProductDetails;





