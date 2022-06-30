import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const Homepage = lazy(() => import('views/Homepage/HomepageView'));
const Movies = lazy(() => import('views/Movies/MoviesView'));
const MovieDetail = lazy(() => import('views/MovieDetail/MovieDetailView'));
const Cast = lazy(() => import('views/Cast/CastView'));
const Reviews = lazy(() => import('views/Reviews/ReviewsView'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path={`/movies/:movieId`} element={<MovieDetail />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
