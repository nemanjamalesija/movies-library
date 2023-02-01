import React from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchMovies from '../helpers/fetchMovies';
import MovieCard from './MovieCard';
import Loading from './Loading';

const FetchedMovies = () => {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [searchTermDummy, setSearchTermDummy] = useState('Batman');

  const { data, isLoading } = useQuery(['movies', searchTerm], fetchMovies);

  if (isLoading) return <Loading />;

  const submitHandler = () => {
    setSearchTerm(searchTermDummy);
  };

  return (
    <main>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label className="main-label">Search for a movie</label>
          <input
            type="text"
            placeholder={searchTermDummy}
            onChange={(e) => setSearchTermDummy(e.target.value)}
          />
        </div>
      </form>
      <div className="movies-container">
        {data?.map((movie) => {
          return <MovieCard key={crypto.randomUUID()} {...movie} />;
        })}
      </div>
    </main>
  );
};

export default FetchedMovies;
