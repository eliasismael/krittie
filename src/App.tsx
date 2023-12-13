import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Adoptions from "./pages/Adoptions";
import Donations from "./pages/Donations";
import Family from "./pages/Family";

function App() {
  return (
    <div className="px-40 h-[100vh]relative">
      <Navbar />
      <div className="h-[calc(100vh-8rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adoptions" element={<Adoptions />} />
          <Route path="family" element={<Family />} />
          <Route path="donations" element={<Donations />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
