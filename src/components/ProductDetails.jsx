import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProducts } from "../redux/productsSlice";

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
  return <div className="product-details">

    <div className="details-left-side">
      <img src={image} alt="Productimage" />
    </div>
    <div className="details-right-side">
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{price}</h3>
      <div>
        <span>0</span>
      </div>

    </div>
  </div>;
};

export default ProductDetails;





