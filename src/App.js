import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import ProductList from './components/ProductList';
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Router>
        <Header onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                category={selectedCategory}
                addToCart={addToCart}
              />
            }
          />
          <Route path="/cart" element={<Card cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
