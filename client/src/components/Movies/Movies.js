import React, {Component} from 'react';
import Gallery from '../Gallery/Gallery';


class Movies extends Component {
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
                    <Gallery data={this.props.element.popular} />
                </section>
                <section>
                    <h1 className="title_section">Documentary</h1>
                    <Gallery data={this.props.element.documentary} />
                </section>
                <section>
                    <h1 className="title_section">History</h1>
                    <Gallery data={this.props.element.history} />
                </section>
                <section>
                    <h1 className="title_section">Cartoon</h1>
                    <Gallery data={this.props.element.cartoon} />
                </section>
                <section>
                    <h1 className="title_section">Crimes</h1>
                    <Gallery data={this.props.element.crimes} />
                </section>
            </div>
        )
    }
}


export default Movies;