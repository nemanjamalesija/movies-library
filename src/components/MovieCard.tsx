import React from 'react';
import { movieCard } from '../constants/types';

const MovieCard = (props: movieCard) => {
  const { Poster, Title, Type, Year, imdbID } = props;
  return (
    <article className='fetched-movie'>
      <img src={Poster} alt={Title} />
      <div className="movie-description">
        <h5 className="heading-fifth">{Title}</h5>
        <p className="movie-year">{Year}</p>
      </div>
    </article>
  );
};

export default MovieCard;
