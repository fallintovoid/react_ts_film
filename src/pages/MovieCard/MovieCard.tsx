import React, { useEffect, useState } from "react";
import { getMovie } from "../../api/api";

import './MovieCard.scss';

export const MovieCard: React.FC = React.memo(() => {
    const [movie, setMovie] = useState<Movie | null>(null);

    const getMovieFromServ = async () => {
        setMovie(await getMovie('dd'));
    }

    useEffect(() => {
        getMovieFromServ();
    }, []);

    console.log('render movie');

    return (
        <div className="container">
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
        </div>
        
    )
});