import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetail';
import ProductListing from './components/ProductListing';
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<ProductListing/>} />
      <Route path="/product/:productId" element={<ProductDetails/>} />
      <Route> 404 Not found!</Route>
     </Routes>
     
    </div>
  );
}

export default App;
