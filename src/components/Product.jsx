import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const { id, title, image, category, description, price } = data;
  const navigate= useNavigate();

  console.log(image);
  return (
    <div className="cart">
      <div className="image">
        <img src={image} alt="Products-image" />
      </div>
      <div className="cart-container">
        <div className="cart-details">
          <p>{title}</p>
          <h4>{price}₼</h4>
        </div>
        <div className="details-btn">
          <button onClick={()=>navigate(`/product-details/${id}`)}>Detallar</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
