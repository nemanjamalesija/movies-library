export type movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type singleMovie = {
  Actors: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  Director?: string;
  Genre: string;
  Language?: string;
  Metascore?: string;
  Plot: string;
  Poster: string;
  Production?: string;
  Rated: string;
  Ratings?: Object;
  Released: string;
  Response?: string;
  Runtime?: string;
  Title: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year: string;
  imdbID?: string;
  imdbRating: string;
  imdbVotes: string;
};

export type queryKey = { queryKey: [string, string] };
