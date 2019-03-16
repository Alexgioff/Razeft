import React, {Component} from 'react';
import $ from 'jquery';
import './Slideshow.css';

import Card from './Card/Card';



class Slideshow extends Component {


    componentDidMount() {
        this.slide();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    slide = () => {
        $(".slideshow > .card:gt(0)").hide();
       this.interval = setInterval(() => {
            $(".slideshow > .card:first")
                .fadeOut(2000)
                .next()
                .fadeIn(2000)
                .end()
                .appendTo('.slideshow')
        }, 5000)
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