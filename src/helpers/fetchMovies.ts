import axios from 'axios';
import { queryKey, movie } from '../constants/types';

const fetchMovies = async ({ queryKey }: queryKey): Promise<movie[]> => {
  const searchTerm = queryKey[1];

  const {
    data: { Search },
  } = await axios(`https://www.omdbapi.com/?apikey=e270e65e&s=${searchTerm}`);

  return Search;
};

export default fetchMovies;
