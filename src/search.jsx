import { useState, useEffect } from "react";
import "./search.css";
import Card from "./card.jsx";
import Loader from "./loader.jsx"; // ✅ custom loader

const Search = () => {
  const [query, setQuery] = useState(""); 
  const [cocktails, setCocktails] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchCocktails = async (searchTerm, signal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        { signal }
      );
      const data = await res.json();
      if (data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
      }
    } catch (err) {
      if (err.name === "AbortError") return;
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchCocktails("margarita", controller.signal);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetchCocktails(query, controller.signal);
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <>
      <section className="search">
        <div className="search-container">
          <p>
            Search for your favorite <span>Cocktail</span>
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Type a cocktail name..."
              value={query}
              onChange={handleChange}
            />
          </form>
        </div>
      </section>

      <section className="card-section">
        <div className="card-header">
          <h1>Cocktails:</h1>
        </div>

        {/* ✅ Show loader while fetching */}
        {loading && (
          <div className="loader-wrapper">
            <Loader />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {!loading && !error && cocktails.length === 0 && query && (
          <p className="no-results">No cocktails found</p>
        )}

        {/* ✅ Only show cards if not loading */}
        {!loading && (
          <div className="card-container">
            {cocktails.map((drink) => (
              <Card
                key={drink.idDrink}
                id={drink.idDrink}
                name={drink.strDrink}
                image={drink.strDrinkThumb}
                category={drink.strCategory}
                alcoholic={drink.strAlcoholic}
                glass={drink.strGlass}
                instructions={drink.strInstructions}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
