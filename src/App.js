import { Route, Routes } from "react-router-dom";
import "./App.css";

import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { Navbar, Hero, Footer } from "./components/index";
import { useState } from "react";
import CategoryPage from "./pages/CategoryPage";
import Signup from "./pages/Signup";
import FormPage from "./pages/FormPage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="main-container">
        <Navbar searchval={search} searchset={setSearch} />
      </div>

      <div className="hero-container">
        <Hero />
      </div>

      <div>
        <Routes>
          <Route path="/shop" element={<Shop searchval={search} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<FormPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/" element={<HomePage searchval={search} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
