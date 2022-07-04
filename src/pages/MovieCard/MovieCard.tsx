import React, { useCallback, useEffect, useState } from "react";
import { getMovie } from "../../api/api";

import './MovieCard.scss';

export const MovieCard: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);

    const getMovieFromServ = useCallback(async () => {
        const response = await getMovie('dd');

        setMovie(response);
    }, []);

    useEffect(() => {
        getMovieFromServ();
    }, []);

    console.log('render movie');

    return (
        <div className="container">
            {!movie ? (<h1>Loading</h1>) : (
                <div className="movie">
                    <div className="movie__img"></div>
                    <div className="movie__body">
                        <div className="movie__body--title">
                            {movie?.Title}
                        </div>
                        <div className="movie__body--description">
                            {movie?.Plot}
                        </div>
                    </div>
                </div>
            )}
        </div>        
    )
};