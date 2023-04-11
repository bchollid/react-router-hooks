import React, { useState, useEffect } from "react";
import { FilterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers"
import {Link} from "react-router-dom";

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
let filmStats = getFilmStats(list)
let {avg_score, latest, total} = getFilmStats(filmsByDirector)

console.log(filmStats);

return (
  <div>
    <h1>Studio Ghibli Films</h1>
    <form>
      <label htmlFor="searchDirector">Filter By Director: </label>
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
    <div>
  <div>
    <hr />
    <span># Of Films: </span>
    <span>{total}</span>
  </div>
  <hr />
  <div>
    <span>Average Rating: </span>
    <span>{avg_score}</span>
  </div>
  <hr />
  <div>
    <span>Latest Film: </span>
    <span>{latest}</span>
  </div>
  <hr/>
</div>
    <ul>
      {filmsByDirector.map((film) => {
        return <li key={film.id}><Link to={`/films/${film.id}`}>{film.title}</Link></li>;
      })}
    </ul>
  </div>
);
}

export default FilmPage;