import {Component} from "react";
import React from 'react';

class FilmsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
        }
    }
    getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((res) => res.json())
        .then((films) => this.setState({ list: films }))
        .catch((err) => console.error(err));
    }
    componentDidMount(){
        this.getFilms()
    }
    render(){
        return <ul>
            {this.state.list.map((film) => {
                return <li key={film.id}>{film.title}</li>
            })}
        </ul>
    }
}

export default FilmsList;

