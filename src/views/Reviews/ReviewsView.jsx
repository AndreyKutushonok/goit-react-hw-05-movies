import { getReviewsInfo } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewsInfo() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await getReviewsInfo(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!reviews && <h2>There is no reviews</h2>}
    </>
  );
}
