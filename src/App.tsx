import React from 'react';
import './App.css';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import fetchMovies from './helpers/fetchMovies';
import { useState } from 'react';
import MovieCard from './components/MovieCard';

function App() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('batman');

  const { data, isLoading } = useQuery(['movies', searchTerm], fetchMovies);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <main>
      <div className="movies-container">
        {data?.map((movie) => {
          return <MovieCard key={crypto.randomUUID()} {...movie} />;
        })}
      </div>
    </main>
  );
}

export default App;
