import axios from 'axios';

export const axiosGet = axios.create({
  url: '',
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '8aee03cb2478db5e76cfede337c072a1',
    language: 'en-US',
  },
});
