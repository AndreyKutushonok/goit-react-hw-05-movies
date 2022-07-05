import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies &&
          movies.map(({ id, title, original_name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || original_name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieList;
