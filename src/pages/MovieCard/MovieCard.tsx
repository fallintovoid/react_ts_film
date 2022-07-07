import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../special_components/Loader";

import { AppDispatch, setFilm } from "../../store";
import { getFilmSelector, getLoadingSelector } from "../../store/selectors";

import './MovieCard.scss';

export const MovieCard: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { parami } = useParams<{ parami: string }>();

    useEffect(() => {
        if (parami) {
            dispatch(setFilm(parami));
        }
    }, []);

    console.log('render movie');

    const movie = useSelector(getFilmSelector);

    const isLoading = useSelector(getLoadingSelector);

    return (
        <div className="container">
            {isLoading ? <Loader /> : (
                <div className="movie">
                    <div className="movie__img">
                        <img src={movie?.Poster} />
                    </div>
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