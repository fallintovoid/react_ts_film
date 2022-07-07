import { configureStore, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getMovie } from "../api/api";


enum ActionType {
    SET_POSTS = 'SET_POSTS',
    SET_LOADER = 'SET_LOADER'
}

export type State = {
    film: Movie | null,
    loading: boolean
};

const initialState: State = {
    film: null,
    loading: false
}

export const setFilm = createAsyncThunk<Movie, string>(ActionType.SET_POSTS, async (title: string) => {
    const film = await getMovie(title);

    return film;
});

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setFilm.pending, (state, action) => {
        state.loading = true;
    })

    builder.addCase(setFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.loading = false;
    })
});

export const store = configureStore({
    reducer
});

export type AppDispatch = typeof store.dispatch;
