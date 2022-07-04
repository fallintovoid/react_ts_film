import { request } from 'http';
import React from 'react'
import useRequest from './useRequest';



const useApi = () => {
    const {request} = useRequest();
    const _apiKey = 'd2757d8b';

    const getFilm = async (title: string) => {
        const res = await request(`https://www.omdbapi.com/?apikey=${_apiKey}&t=${title}`);
        return await _transformFilm(res);
    }

    const _transformFilm = (film: any) => {
        return {
            title: film.Title,
            plot: film.Plot
        }
    }

    return {getFilm};
}

export default useApi;