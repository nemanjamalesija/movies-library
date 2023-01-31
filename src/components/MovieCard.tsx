import React from 'react';
import { movieCard } from '../constants/types';

const MovieCard = (props: movieCard) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <article className="movie-card">
      <img src={Poster} alt={Title} />
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
  );
};

export default MovieCard;
