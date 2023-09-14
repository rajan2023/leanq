import { createSlice } from '@reduxjs/toolkit';

interface userState {
  movie_genre?: Array<{
    id: number | string;
    name: string;
  }> | null;
  movies: Array<{
    title?: string;
  }> | null;
}
const initialState: userState = {
  movie_genre: null,
  movies: null,
};

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    set_movie_genres: (state, action) => {
      state.movie_genre = action.payload;
    },
    set_movies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { set_movie_genres, set_movies } = movieSlice.actions;

export default movieSlice.reducer;
