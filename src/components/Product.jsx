import React from 'react'

const Product = ({data}) => {
    const {id,title,image,category,description,price}=data;
    console.log(image)
  return (
    <div>Product</div>
  )
}

export default Product