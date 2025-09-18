import React from "react";
import "./App.css";
import Navbar from "./navbar.jsx";
import Search from "./search.jsx";
import Footer from "./footer.jsx";
import { Routes, Route } from "react-router-dom";
import SingleCocktail from "./SingleCocktail.jsx";
import About from "./About.jsx";
import Training from "./Training.jsx"; // ✅ import Training page

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home/Search page */}
        <Route path="/" element={<Search />} />

        {/* Single cocktail page */}
        <Route path="/cocktail/:id" element={<SingleCocktail />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Training page */}
        <Route path="/training" element={<Training />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
