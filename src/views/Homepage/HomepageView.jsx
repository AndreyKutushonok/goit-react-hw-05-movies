import { getTrendingMovie } from 'services/API';
import { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList';
import Container from 'components/Container/Container';
import s from './Homepage.module.css';

export default function HomepageView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const data = await getTrendingMovie();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPopularMovies();
  }, []);

  return (
    <Container>
      <h2 className={s.trMovies}>Tranding movies</h2>
      <MovieList movies={movies} />
    </Container>
  );
}
