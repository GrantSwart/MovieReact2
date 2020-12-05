import React from "react";

function Searchmovie() {
  //Basic Search Movie Function
  const SearchMov = async (e) => {
    //prevent it from doing its default action of posting data
    e.preventDefault();
    console.log("submitting test");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c0383eeb7101667f3d2cc6049dec7ecf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={SearchMov}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchmovie;
