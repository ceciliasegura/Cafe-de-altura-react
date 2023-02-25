
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { CoffeProvider } from './context/CoffeProvider';

function App() {


  return (
    <>
      <CoffeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </CoffeProvider>
    </>
  );
}

export default App;
