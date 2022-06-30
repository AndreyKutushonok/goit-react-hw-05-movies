import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies &&
          movies.map(({ id, title, original_name }) => (
            <li key={id}>
              <Link to={`/movie/${id}`}>{title || original_name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieList;
