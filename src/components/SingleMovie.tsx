import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchSingleMovie from '../helpers/fetchSingleMovie';

const SingleMovie = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery(
    ['singleMovie', movieId as string],
    fetchSingleMovie
  );

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return <div>{movieId}</div>;
};

export default SingleMovie;
