import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchSingleMovie from '../helpers/fetchSingleMovie';
import { singleMovie } from '../constants/types';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const SingleMovie = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery(
    ['singleMovie', movieId as string],
    fetchSingleMovie
  );

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  const { Plot, Poster, Rated, Title, imdbRating, imdbVotes, Year, Runtime } =
    data as singleMovie;

  return (
    <article className="single-movie-card">
      <div className="image-div">
        <img src={Poster} alt={Title} className="single-movie-image" />
      </div>
      <div className="single-movie-description">
        <h2 className="heading-secondary">{Title}</h2>
        <div className="bot-level-info">
          <div className="rating-div">
            <IonIcon icon={star} className="imdb-star"></IonIcon>
            <p className="rating">{imdbRating}</p>
          </div>

          <p className="number-of-votes">({imdbVotes} votes)</p>
        </div>

        <p className="plot-info">{Plot}</p>
        <div className="top-level-info">
          <p className="single-movie-year">
            {Year} <span>&middot;</span>
          </p>
          <p className="pg-rating">
            {Rated} <span>&middot;</span>
          </p>
          <p className="runtime">{Runtime}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleMovie;
