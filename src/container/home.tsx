import { useCallback, useEffect } from 'react';
import { movie_list_get, movie_review_api_get } from '../services/movies';
import { useAppDispatch, useAppSelector } from '../hooks/redux_hook';
import { set_movie_genres, set_movies } from '../store/reducers/movieSlice';
import './index.css';
const Home = () => {
  const dispatch = useAppDispatch();
  const movie_genres = useAppSelector((state) => state.movie.movie_genre);
  const movies = useAppSelector((state) => state.movie.movies);

  const movie_data_fetch = useCallback(async () => {
    try {
      const [genreResponse, movieResponse] = await Promise.all([
        movie_review_api_get(),
        movie_list_get(),
      ]);

      console.log(genreResponse.data.genres);
      dispatch(set_movie_genres(genreResponse.data.genres));

      console.log(movieResponse.data);
      dispatch(set_movies(movieResponse.data.results));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    movie_data_fetch();
  }, [movie_data_fetch]);

  return (
    <div>
      <div className="moviebar">
        {movie_genres?.map((p: { name: string; id: number | string }) => (
          <p className="text-white" key={p.name}>
            {p.name}
          </p>
        ))}
      </div>
      <div>
        <h1>Latest Movies</h1>
        <div className="flexwrap">
          {movies?.map((p: any) => (
            <div className="card" key={p?.original_title}>
              <img
                width={'200px'}
                height={'250px'}
                src={
                  'https://www.themoviedb.org/t/p/w440_and_h660_face/' +
                  p?.poster_path
                }
                alt="img"
              />
              <p>Title</p>
              <p>Jul 19,2019</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
