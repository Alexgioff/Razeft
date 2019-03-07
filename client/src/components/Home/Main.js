import React from 'react';

import PopularTv from './PopularTv/PopularTv';
import PopularMovies from './PopularMovies/PopularMovies';
import HorrorMovies from './HorrorMovies/HorrorMovies';
import ScifiFantasySeries from './ScifiFantasySeries/ScifiFantasySeries';

import './Main.css';

const Main = ({tvSeries, movies, horror, scifiFantasySeries}) => {
    return(
        <div className="main">
            <section>
                <h1 className="title_section">Popular Tv Series</h1>
                <PopularTv tvSeries={tvSeries}/>
            </section>
            <section>
                <h1 className="title_section">Popular Movies</h1>
                <PopularMovies movies={movies}/>
            </section>
            <section>
                <h1 className="title_section">Horror Movies</h1>
                <HorrorMovies horror={horror}/>
            </section>
            <section>
                <h1 className="title_section">Sci-fi / Fantasy Tv Series</h1>
                <ScifiFantasySeries scifiFantasySeries={scifiFantasySeries}/>
            </section>
        </div>
    )
}



export default Main;