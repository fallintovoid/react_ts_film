import React from "react";

import './MovieCard.scss';

export const MovieCard: React.FC = React.memo(() => {
    return (
        <div className="container">
            <div className="movie">
                <div className="movie__img"></div>
                <div className="movie__body">
                    <div className="movie__body--title">
                        TITLE
                    </div>
                    <div className="movie__body--description">
                        This film about everything
                    </div>
                </div>
            </div>
        </div>
        
    )
});