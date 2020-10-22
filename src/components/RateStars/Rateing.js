import React from "react";
import { FaStar } from "react-icons/fa";
import "./rating.css"

const RatingStars = ({rate, setRate,  movies}) => {
  return (
    <div className="App">
      <span className="style">
        {[...Array(5)].map((Star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {setRate(ratingValue)}
                }
              />
              <FaStar
                className="star"
                size={30}
                color={ratingValue <= rate ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </span>
    </div>
  );
};

export default RatingStars;
RatingStars.defaultProps = {
  setRate: () => {},

}