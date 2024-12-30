import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  del,
  like,
  inputV,
  edit,
  categoryValue,
  filterStar,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: " space-evenly",
      }}
    >
      {categoryValue === "All"
        ? movies
            .filter(
              (el) =>
                el.name.toUpperCase().includes(inputV.toUpperCase().trim()) &&
                el.rating >= filterStar
            )
            .map((el) => (
              <MovieCard
                like={like}
                del={del}
                key={el.id}
                el={el}
                edit={edit}
              />
            ))
        : movies
            .filter(
              (el) =>
                el.name.toUpperCase().includes(inputV.toUpperCase().trim()) &&
                el.category === categoryValue &&
                el.rating >= filterStar
            )
            .map((el) => (
              <MovieCard
                like={like}
                del={del}
                key={el.id}
                el={el}
                edit={edit}
              />
            ))}
    </div>
  );
};

export default MovieList;
