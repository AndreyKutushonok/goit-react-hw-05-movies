import { getCastInfo } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CastInfo() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await getCastInfo(movieId);

        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>

      {cast && (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt="actor"
                  width={120}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && <h2>There is no information about movie cast</h2>}
    </>
  );
}
