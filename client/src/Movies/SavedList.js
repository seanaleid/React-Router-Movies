import React from 'react';
import {Link} from 'react-router-dom';
// import MovieCard from "./MovieCard";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      <Link className="home-button" to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
