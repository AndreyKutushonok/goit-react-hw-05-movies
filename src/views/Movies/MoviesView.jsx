import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../../services/API';
import MovieList from '../../components/Movie/MovieList';
import Container from 'components/Container/Container';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery.toLowerCase().trim() });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function movieSearch() {
      try {
        const data = await getMovie(query);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    movieSearch();
    setSearchQuery('');
    setMovie('');
  }, [query]);

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={handleSearchQuery}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {movie && <MovieList movies={movie} />}
    </Container>
  );
}
