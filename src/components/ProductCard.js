import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function ProductCard({
  number,
  image,
  title,
  description,
  category,
  price,
  rating,
  count,
  addToCart
}) {
  const [showDisc, setShowDisc] = useState(false);
  const toggleDisc = () => {
    setShowDisc(true);
  };
  const hideDisc = () => {
    setShowDisc(false);
  };

  return (
    <div className="col-md-3 py-2">
      {" "}
      <Card
        onMouseEnter={toggleDisc}
        onMouseLeave={hideDisc}
        className="p-2 d-flex justify-content-center postion-relative align-content-center align-items-center"
        style={{ width: "22rem", height: "25em" }}
      >
        <span className="bg-dark text-white text-start btn btn-sm card-number">
          {number}
        </span>
        <Card.Img
          className="px-3  "
          style={{ width: "5rem", height: "auto" }}
          variant="top"
          src={image}
        />
        <Card.Body className="text-justify" style={{ textAlign: "justify" }}>
          <Card.Title className="fs-6 ">{title}</Card.Title>
          <Card.Text
            className={
              "d-md-block text-justify" + showDisc ? "d-block" : `d-none`
            }
            style={{ overflowY: "scroll", height: "5em", opacity: "0.7" }}
          >
            {description}
          </Card.Text>
          <Card.Text>
            <strong>Category: </strong>
            {category}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between">
            <Button variant="info">&#8377; {price}</Button>
            <Button variant="success" onClick={addToCart}>Buy now</Button>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between">
            <span>
              {" "}
              {rating}
              <FontAwesomeIcon icon={faStar} />{" "}
            </span>
            <span>( {count} ) </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
