import { axiosGet } from './settings';

export const getTrendingMovie = async () => {
  try {
    const {
      data: { results },
    } = await axiosGet('/trending/all/day', {});

    return results;
  } catch (error) {
    throw Object.error('There is no tranding movies');
  }
};

export const getMovie = async name => {
  try {
    const {
      data: { results },
    } = await axiosGet('/search/movie', {
      params: { query: name },
    });

    return results;
  } catch (error) {
    throw Object.error('There is no information about the movie yet...');
  }
};

export const getMovieInfo = async id => {
  try {
    const { data } = await axiosGet(`movie/${id}`, {});
    return data;
  } catch (error) {
    throw Object.error('There is no information about this movie');
  }
};

export const getCastInfo = async id => {
  try {
    const { data } = await axiosGet(`movie/${id}/credits`, {});
    return data;
  } catch (error) {
    throw Object.error('There is no information about actors');
  }
};

export const getReviewsInfo = async id => {
  try {
    const { data } = await axiosGet(`movie/${id}/reviews`, {});
    return data;
  } catch (error) {
    throw Object.error('There is no reviews');
  }
};
