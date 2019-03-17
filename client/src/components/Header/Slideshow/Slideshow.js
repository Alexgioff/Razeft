import React, {Component} from 'react';
import './Slideshow.css';

import Card from './Card/Card';



class Slideshow extends Component {

    componentDidMount() {
        var slide = document.querySelector(".slideshow");
        setTimeout(() => {
            slide.classList.add("slideshow-active");
        },50);
    }

   render() {
        return (
            <div className="slideshow">
                {
                    this.props.element.map((user, i) => {
                        return(
                            <Card
                                key={i}
                                title={this.props.element[i].name || this.props.element[i].title}
                                poster={this.props.element[i].poster_path}
                                backdrop={this.props.element[i].backdrop_path}
                            />
                        )
                    })
                }
            </div>
        )
   }
}


export default Slideshow;