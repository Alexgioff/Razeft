import React from 'react';


const Card = ({title, poster, backdrop}) => {
    return(
        <div className="card">
            <picture >
                <source  media="(max-width: 500px)" srcSet={`https://image.tmdb.org/t/p/w500${poster}`} />
                <source media="(max-width: 780px)" srcSet={`https://image.tmdb.org/t/p/w780${poster}`}/>
                <source media="(max-width: 1280px)" srcSet={ backdrop ? `https://image.tmdb.org/t/p/w1280${backdrop}` : `https://image.tmdb.org/t/p/original${poster}`} />
                <img className="poster" src={`https://image.tmdb.org/t/p/original${backdrop}`} alt="Poster" />
            </picture>
            <div className="caption">
                <h1>{title}</h1>
            </div>
        </div>
    )
}


export default Card;