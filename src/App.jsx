import './App.css';
import {Component, useState, useEffect} from "react";
import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { FilmPage, HomePage } from './pages/index.jsx';
import { FilterFilmsByDirector } from "./helpers/film.helpers.js"

function App(props){
return (
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/FilmsPage">Films</NavLink>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/FilmsPage" element={<FilmPage />}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
