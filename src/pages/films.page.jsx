import React, { useState, useEffect } from "react";
import { FilmsPage } from ".";
import { FilterFilmsByDirector, getListOf } from "../helpers/film.helpers"

export function FilmPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

let filmsByDirector = FilterFilmsByDirector(list, searchDirector)
let directors = getListOf(list, "director")

return (
  <div>
    <h1>Studio Ghibli Films</h1>
    <form>
      <label htmlFor="searchDirector">Filter By Director</label>
      <select
        name="searchDirector"
        id="searchDirector"
        value={searchDirector}
        onChange={(e) => setSearchDirector(e.target.value)}
      >
        <option value="">All</option>
        {directors.map((director, idx) => {
          return (
            <option key={director + idx} value={director}>
              {director}
            </option>
          );
        })}
      </select>
    </form>
    <ul>
      {filmsByDirector.map((film) => {
        return <li key={film.id}>{film.title}</li>;
      })}
    </ul>
  </div>
);
}

export default FilmPage;