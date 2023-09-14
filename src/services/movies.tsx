import { async } from 'q';
import httpClients from '../utils/httpClients';

export const movie_review_api_get = async () =>
  await httpClients.GET(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    false
  );
export const movie_list_get = async () =>
  await httpClients.GET(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    true
  );
