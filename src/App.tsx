import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Adoptions from "./pages/Adoptions";
import Donations from "./pages/Donations";
import Family from "./pages/Family";
import Footer from "./components/Footer";
import BuyKRT from "./components/Cards/BuyKRT";
import OnlineShop from "./pages/OnlineShop";

function App() {
  return (
    // // container
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* content */}

      <div className="px-8 sm:px-20 h-[calc(100vh-8rem)] relative flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adoptions" element={<Adoptions />} />
          <Route path="family" element={<Family />} />
          <Route path="donations" element={<Donations />} />
          <Route path="shop" element={<OnlineShop />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
