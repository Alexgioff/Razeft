import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import {getMovies} from '../actions/action';
import {connect} from 'react-redux';



const mapStateToProps = (state) => {
    return {
      isPedding: state.getShowsMovies.isPedding,
      movies: state.getShowsMovies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetMovies: () => dispatch(getMovies())
    }
}


class MoviesPage extends Component {
    constructor() {
        super();
        this.state ={
            isLoad: false
        }
    }

    componentDidMount() {
        this.props.onGetMovies();
       setTimeout(() => {
           
           var loader = document.querySelector(".loader");

           this.fadeOut(loader);
           setTimeout(() => {
            this.setState({isLoad: true});
           }, 500);
           console.log(this.props.movies);
       }, 6000)
    }

    fadeOut = (el) => {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
    };


    render() {
        return (
            <div className="container">
                <header className="header">
                    <Header />
                </header>
                {!this.state.isLoad ? <h1 className="loader">Loading</h1> : <Movies element={this.props.movies}/>}
            </div>
        )
    }
}




export default connect(mapStateToProps, mapDispatchToProps) (MoviesPage);