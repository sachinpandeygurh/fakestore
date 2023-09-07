import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({
  number,
  image,
  title,
  description,
  category,
  price,
  rating,
  count,
}) {
  const[showDisc , setShowDisc]= useState(false)
  const toggleDisc = () => {
    setShowDisc(true);
  };
  const hideDisc = () => {
    setShowDisc(false);
  };
  return (
    <div className="col-md-3 py-2">
      {" "}
      <Card  onMouseEnter={toggleDisc}
        onMouseLeave={hideDisc} 
        className="p-2 d-flex justify-content-center postion-relative align-content-center align-items-center"
        style={{ width: "22rem", height: "auto" }}
      >
        <span className='bg-dark text-white text-start btn btn-sm card-number'>{number}</span>
        <Card.Img className="px-3  " style={{ width: "5rem", height: "auto" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={showDisc ? 'd-block':`d-none`}>{description}</Card.Text>
          <Card.Text>Category: {category}</Card.Text>
          <Button variant="primary">&#8377; {price}</Button>
          <Card.Text>
            {rating} Stars
            {count} Available
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
