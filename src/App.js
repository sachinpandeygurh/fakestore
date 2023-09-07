import './App.css';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CartItems = async ()=>{
  try{
    const product = await axios.get(`https://fakestoreapi.com/products`)
    
    console.log(product.then(res=>res.json()))
  }catch(error){
    alert("Error", error)
  }
}
console.log(CartItems.product);
function App() {
  return (
    <div className="App">
     <ProductList/>
    
    </div>
  );
}

export default App;
