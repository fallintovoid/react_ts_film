import { State } from ".";

export const getFilmSelector = (state: State) => state.film;

export const getLoadingSelector = (state: State) => state.loading;
