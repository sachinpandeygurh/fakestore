import React from 'react';
import ProductCard from './ProductCard';

const Card = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <ProductCard
          number={index + 1}
          key={item.id} 
          image={item.image}
          title={item.title}
          description={item.description}
          category={item.category}
          price={item.price}
          rating={item.rating.rate}
          count={item.rating.count}
        />
      ))}
    </div>
  );
}

export default Card;
