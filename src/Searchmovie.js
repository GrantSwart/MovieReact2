import React, { useState } from "react";
import Moviecard from "./Moviecard.js";

function Searchmovie() {
  //React Hook - useState inside a functional component
  //states- input query, movies
  const [query, setQuery] = useState("");
  //movie state
  const [movies, setMovies] = useState([]);

  //Basic Search Movie Function
  const SearchMov = async (e) => {
    //prevent it from doing its default action of posting data
    e.preventDefault();
    console.log("submitting test");

    //const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c0383eeb7101667f3d2cc6049dec7ecf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data.results);
      //update movie state here
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={SearchMov}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          //state-query and update state using setQuery
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default Searchmovie;
