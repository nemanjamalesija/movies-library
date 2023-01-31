import axios from 'axios';
import { queryKey, movieCard } from '../constants/types';

const fetchMovies = async ({ queryKey }: queryKey): Promise<movieCard[]> => {
  const searchTerm = queryKey[1];

  const {
    data: { Search },
  } = await axios(`https://www.omdbapi.com/?apikey=e270e65e&s=${searchTerm}`);

  return Search;
};

export default fetchMovies;
