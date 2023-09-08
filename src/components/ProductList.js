import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ category }) {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]); 
  let api 
  
  useEffect(() => {
    if (category === '') {
      api = "https://fakestoreapi.com/products"; 
     } else {
      api = `https://fakestoreapi.com/products/category/${category}`;
     }
    getProduct();
  }, [category]);


  const getProduct = async () => {
   try {
      const result = await axios.get(api);
      setProductData(result.data);
      console.log(result);
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(item)
    console.log(...cart)
  };
  return (
    <div className='row px-md-3 justify-content-center '>
      {productData.map((item, index) => (
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
          addToCart={() => addToCart(item)} 

        />
      ))}
    </div>
  );
}

export default ProductList;
