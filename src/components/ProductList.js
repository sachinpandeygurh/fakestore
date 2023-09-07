import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await axios.get(`https://fakestoreapi.com/products?limit=8`);
      setProductData(result.data);
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className='row px-md-3 justify-content-center '>
      {productData.map((item, index) => (
        <ProductCard
        number={index +1}
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

export default ProductList;
