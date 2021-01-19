import React from 'react';

const FilmList = (props) => {
    // const Favorites = Array.from(props.favorites);
    const Favorites = props.favorites;
    return (
        <>
            {props.films.map(
                (film, index) => 
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={film.Poster} alt="Harry potter pictures"/>
                    <div 
                        onClick={() => props.favoritesChosen(film)} 
                        className="overlay d-flex align-items-center justified-content-center"
                    >
                        <Favorites/>
                    </div>
                </div>
                )
            }
        </>
    );
}

export default FilmList;