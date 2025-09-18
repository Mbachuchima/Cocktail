import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader.jsx";   // ✅ import loader
import "./singlecocktail.css";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.drinks && data.drinks.length > 0) {
          setCocktail(data.drinks[0]);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cocktail:", error);
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) return <Loader />;   // ✅ use loader here
  if (!cocktail) return <p>No cocktail found.</p>;

  return (
    <div className="single-cocktail">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div>
        <h1>{cocktail.strDrink}</h1>
        <p><strong>Category:</strong> {cocktail.strCategory}</p>
        <p><strong>Glass:</strong> {cocktail.strGlass}</p>
        <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
        <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
        <Link to="/" className="back-btn">⬅ Back</Link>
      </div>
    </div>
  );
};

export default SingleCocktail;
