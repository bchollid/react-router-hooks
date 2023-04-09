import logo from './logo.svg';
import './App.css';
import {Component, useState, useEffect} from "react";
import React from 'react';
import FilmsList from './component/filmsList';

function App(props){
  let [list, setList] = useState(["ready", "set", "GO!"])
  let [text, setText] = useState("")

  function onSubmit(event){
    event.preventDefault();
    let newList = [...list, text];
    setList(newList);
    setText("");
  }
  function removeItem(event){
    event.preventDefault();
    let newList = [list.pop(), text]
    console.log(newList)
    setList(newList);
    setText("");
  }
  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id ="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add</button>
      </form>
      <button type="submit" onClick={removeItem}>Remove</button>
      <ul>
        {list.map((item, idx) => {
          return <li key ={item +idx}>{item}</li>
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
