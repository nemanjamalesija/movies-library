import React from 'react';
import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import fetchMovies from '../helpers/fetchMovies';
import MovieCard from './MovieCard';

const FetchedMovies = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('batman');
  const [searchTermDummy, setSearchTermDummy] = useState('Batman');

  const { data, isLoading } = useQuery(['movies', searchTerm], fetchMovies);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

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
