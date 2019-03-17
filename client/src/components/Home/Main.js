import React, {Component} from 'react';

import PopularTv from './PopularTv/PopularTv';
import PopularMovies from './PopularMovies/PopularMovies';
import HorrorMovies from './HorrorMovies/HorrorMovies';
import Anime from './Anime/Anime';

import './Main.css';

class Main extends Component  {

    componentDidMount() {
        var main = document.querySelector(".main");
        setTimeout(() => {
            main.classList.add("main-active");
        },50);
    }

    render(){return(
        <div className="main">
            <section>
                <h1 className="title_section">Popular Tv Series</h1>
                <PopularTv tvSeries={this.props.tvSeries}/>
            </section>
            <section>
                <h1 className="title_section">Popular Movies</h1>
                <PopularMovies movies={this.props.movies}/>
            </section>
            <section>
                <h1 className="title_section">Horror Movies</h1>
                <HorrorMovies horror={this.props.horror}/>
            </section>
            <section>
                <h1 className="title_section">Anime</h1>
                <Anime anime={this.props.anime}/>
            </section>
        </div>
    )}
}



export default Main;