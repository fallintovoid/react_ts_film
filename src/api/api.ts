import gorequest from "../hooks/useRequest";

const key = 'd2757d8b';

const { request } = gorequest();

export const getMovie = async (title: string): Promise<Movie> => {
    const movie = await request(`https://www.omdbapi.com/?apikey=${key}&t=${title}`);

    return movie;
}