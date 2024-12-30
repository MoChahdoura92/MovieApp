import React from "react";

const FilterStar = ({ filterStar, handleStars }) => {
  function stars(filterStar) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filterStar) {
        star.push(
          <span
            onClick={() => handleStars(i)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else
        star.push(
          <span
            onClick={() => handleStars(i)}
            style={{ color: "black", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
    }
    return star;
  }
  return <div>{stars(filterStar)}</div>;
};

export default FilterStar;
