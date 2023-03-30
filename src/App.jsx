import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import React from 'react';
import FilmsList from './component/filmsList';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      <FilmsList />
    </div>
  );
}
}

export default App;
