import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const Homepage = lazy(() => import('views/Homepage/HomepageView'));
const MoviesPage = lazy(() => import('views/Movies/MoviesView'));
const MovieInfoPage = lazy(() => import('views/MovieDetail/MovieDetailView'));
const CastInfo = lazy(() => import('views/Cast/CastView'));
const ReviewsInfo = lazy(() => import('views/Reviews/ReviewsView'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path={`/movie/:movieId`} element={<MovieInfoPage />}>
            <Route path="cast" element={<CastInfo />}></Route>
            <Route path="reviews" element={<ReviewsInfo />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
