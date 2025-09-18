// card.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ id, name, image, category, alcoholic, glass }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>

      <div className="card-content">
        <h1>{name}</h1>
        <p>
          <span>Category:</span> {category}
        </p>
        <p>
          <span>Alcoholic:</span> {alcoholic}
        </p>
        <p>
          <span>Glass:</span> {glass}
        </p>

        {/* More Details Button */}
        <Link to={`/cocktail/${id}`} className="more-details-btn">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
