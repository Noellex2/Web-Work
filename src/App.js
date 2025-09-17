import { Routes, Route, Link } from "react-router-dom";
import Home from "./com/Home";
import Profile from "./com/Profile";
import './App.css';

function App() {
  return (
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default App;
