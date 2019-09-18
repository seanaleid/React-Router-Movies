import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  console.log(movies);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log(response);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  console.log(id);
  return (
    <Link to={`/movies/${id}`} style={{textDecoration: 'none'}}>
      <div className="movie-card">
        <h2>{title}</h2>
        {console.log(movie)};
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}

export default MovieList;
