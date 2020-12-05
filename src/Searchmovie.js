import React, { useState } from "react";

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
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Searchmovie;
