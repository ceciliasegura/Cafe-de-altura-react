
import './App.css';
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Resume from './pages/Resume';

export const CoffeContext = createContext()
function App() {
  return (
    <>
      <BrowserRouter>
      <CoffeContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </CoffeContext.Provider>
    </BrowserRouter>
  </>
  );
}

export default App;
