import React from 'react';
import { movie } from '../constants/types';
import { Link } from 'react-router-dom';

const MovieCard = (props: movie) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <Link to={`/${imdbID}`}>
      {' '}
      <article className="movie-card-main">
        <img className="movie-image-main" src={Poster} alt={Title} />
        <div
          className={
            Title.length >= 30
              ? 'movie-description movie-description-translateExtra'
              : 'movie-description'
          }
        >
          <h5 className="heading-fifth">{Title}</h5>
          <p className="movie-year">{Year}</p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
