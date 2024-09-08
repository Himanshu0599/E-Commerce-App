import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Shop from './pages/Shop'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Billing from './pages/Billing';
import Success from './pages/Succes';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/products/:category"  element={<Products/>}/>
        <Route path="/product/:id"  element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favorite' element={<Favorite/>}/>  
        <Route path='/billing' element={<Billing/>}/>   
        <Route path='/success' element={<Success/>}/>   
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
