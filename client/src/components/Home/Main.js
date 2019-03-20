import React, {Component} from 'react';

import Gallery from '../Gallery/Gallery';

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
                <Gallery data={this.props.tvSeries}/>
            </section>
            <section>
                <h1 className="title_section">Popular Movies</h1>
                <Gallery data={this.props.movies}/>
            </section>
            <section>
                <h1 className="title_section">Horror Movies</h1>
                <Gallery data={this.props.horror}/>
            </section>
            <section>
                <h1 className="title_section">Anime</h1>
                <Gallery data={this.props.anime}/>
            </section>
        </div>
    )}
}



export default Main;