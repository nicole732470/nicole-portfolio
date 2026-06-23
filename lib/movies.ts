export type Movie = {
  title: string;
  year: string;
  rating: string;
  poster: string;
  imdb: string;
};

/** Recently watched — posters via OMDb / IMDb */
export const movies: Movie[] = [
  {
    title: "Moonstruck",
    year: "1987",
    rating: "7.2",
    imdb: "https://www.imdb.com/title/tt0093565/",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdiMjI1MTQtMWIzNC00OTg2LWI5NjItYTBiMTYzMmIxYmNjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "The Office",
    year: "2005",
    rating: "9.0",
    imdb: "https://www.imdb.com/title/tt0386676/",
    poster: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
  {
    title: "Dinner in America",
    year: "2020",
    rating: "7.5",
    imdb: "https://www.imdb.com/title/tt9058654/",
    poster: "https://m.media-amazon.com/images/M/MV5BMWY3Njk2ZTMtY2Q0ZC00OTE2LWEyNzAtOTA0NmM3ZjNhNTJiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Four Weddings and a Funeral",
    year: "1994",
    rating: "7.1",
    imdb: "https://www.imdb.com/title/tt0109831/",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMyNzg2NzgxNV5BMl5BanBnXkFtZTcwMTcxNzczNA@@._V1_SX300.jpg",
  },
  {
    title: "Project Hail Mary",
    year: "2026",
    rating: "8.3",
    imdb: "https://www.imdb.com/title/tt12042730/",
    poster: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Disclosure Day",
    year: "2026",
    rating: "—",
    imdb: "https://www.imdb.com/title/tt15047880/",
    poster: "https://m.media-amazon.com/images/M/MV5BMTgwNDI1ZjctYWNmMS00MTJhLTg1ZWItMzI1Yjk5NjZkYWFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
  },
];
