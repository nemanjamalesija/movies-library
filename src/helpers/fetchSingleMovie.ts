import axios from 'axios';
import { queryKey, singleMovie } from '../constants/types';

const fetchSingleMovie = async ({
  queryKey,
}: queryKey): Promise<singleMovie> => {
  const movieId = queryKey[1];

  const { data } = await axios(
    `http://www.omdbapi.com/?apikey=e270e65e&i=${movieId}`
  );

  return data;
};

export default fetchSingleMovie;
