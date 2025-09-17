import { Routes, Route, Link } from "react-router-dom";
import Home from "./com/Home";
import Profile from "./com/Profile";
import './App.css';
import Cart from "./com/Cart";
import Header from "./com/Header";
import Checkout from "./com/Checkout";

function App() {
  return (
<>
  <Header/>  
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
</>

  );
}

export default App;
