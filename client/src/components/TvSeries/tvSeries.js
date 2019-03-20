import React, {Component} from 'react';
import Gallery from '../Gallery/Gallery';

class TvSeries extends Component {
    componentDidMount() {
        var main = document.querySelector(".main");
        setTimeout(() => {
            main.classList.add("main-active");
        },50);
    }
    render() {
        return(
            <div className="main">
                <section>
                    <h1 className="title_section">Popular </h1>
                    <Gallery data={this.props.element.popularSeries} />
                </section>
                <section>
                    <h1 className="title_section">Comedy</h1>
                    <Gallery data={this.props.element.comedy} />
                </section>
                <section>
                    <h1 className="title_section">Politics</h1>
                    <Gallery data={this.props.element.politics} />
                </section>
                <section>
                    <h1 className="title_section">Family</h1>
                    <Gallery data={this.props.element.family} />
                </section>
                <section>
                    <h1 className="title_section">Reality</h1>
                    <Gallery data={this.props.element.reality} />
                </section>
            </div>
        )
    }
}


export default TvSeries;