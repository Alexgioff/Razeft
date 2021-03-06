import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Slideshow from '../components/Header/Slideshow/Slideshow';
import Main from '../components/Home/Main';
import {getShows} from '../actions/action';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
      isPedding: state.getShowsHome.isPedding,
      data: state.getShowsHome.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetShows: () => dispatch(getShows())
    }
}

class Home extends Component  {
    constructor() {
        super();
        this.state = {
          isLoad: false,
          headerSlide: []
        }
    }

    componentDidMount() {
        this.props.onGetShows();
    }


    componentWillUpdate(nextProps, prevState) {
      console.log(nextProps.isPedding);
      if(nextProps.isPedding === false) {
        setTimeout(() => {
          this.loadHeader(this.props.data.popularSeries, this.props.data.popularMovies)
        }, 3000);
      }
    }

    loadHeader = (tvSeries, movies) =>{
        let pre = [];
        while(this.state.headerSlide.length !== 1) {
            let number = Math.floor(Math.random() * 20 );
            pre.forEach(num => {
              if(number === num){
                number++;
              }
            })
            if(number % 2 === 0 && tvSeries[number].backdrop_path != null && tvSeries[number].poster_path != null){
                let newElement = [...this.state.headerSlide, tvSeries[number]];
                this.setState({headerSlide: newElement})
            } else  if(movies[number].backdrop_path != null && movies[number].poster_path != null){
                let newElement = [...this.state.headerSlide,movies[number]];
                this.setState({headerSlide: newElement})
            }
            pre.push(number);
        }

        var loader = document.querySelector(".loader");

        this.fadeOut(loader);

        setTimeout(()=> {
          var header = document.querySelector("header");
          header.classList.add("header-slide")
          this.setState({isLoad: true})
        },1000)
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
      return(
        <div className="container">
          <header className="header">
            <Header />
            {!this.state.isLoad ? "" : <Slideshow element={this.state.headerSlide} />}
          </header>
          {!this.state.isLoad ? <h1 className="loader">Loading</h1> :  <Main tvSeries={this.props.data.popularSeries} movies={this.props.data.popularMovies} horror={this.props.data.horrorMovies} anime={this.props.data.anime}/> }
        </div>
      )
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Home);