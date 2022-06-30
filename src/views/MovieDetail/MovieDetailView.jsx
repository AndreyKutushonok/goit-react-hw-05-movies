import { getMovieInfo } from '../../services/API';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import s from './MovieDetails.module.css';

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <Link to={location?.state?.from ?? '/'} className={s.goBackLink}>
        Go back
      </Link>
      {/* при клікі на Go back кидає на сторінку Home, не знаю як це виправити*/}
      {movie && (
        <>
          <div className={s.infoWrap}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster"
              width={320}
            />
            <div className={s.infoTextWrap}>
              <h2>{movie.title || movie.original_name}</h2>
              <p>User Score: {movie.vote_average}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(movie => movie.name).join(', ')}</p>
            </div>
          </div>
          <div className={s.addInfWrap}>
            <p>Additional information</p>
            <NavLink
              to="cast"
              className={s.castLink}
              state={{ from: location.state?.from }}
            >
              Cast
            </NavLink>
            <NavLink
              to="reviews"
              className={s.reviewLink}
              state={{ from: location.state?.from }}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
      {!movie && <p>there is no information about this movie</p>}
    </Container>
  );
}
