import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink exact="true" to="/" className={s.HomeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.MoviesLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
