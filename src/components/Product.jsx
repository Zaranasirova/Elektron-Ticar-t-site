import React from "react";

const Product = ({ data }) => {
  const { id, title, image, category, description, price } = data;
  console.log(image);
  return (
    <div className="cart">
      <div className="image">
        <img src={image} alt="Products-image" />
      </div>
      <div className="cart-details">
        <p>{title}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Product;
