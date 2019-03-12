import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Home/Main';
import {getShows} from '../actions/action';
import $ from 'jquery';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
      isPedding: state.getShowsHome.isPedding,
      data: state.getShowsHome.data
    }
}

const mapDispatchToProps = (dispatch, ) => {
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
        setTimeout(() => {
          this.loadHeader(this.props.data.popularSeries, this.props.data.popularMovies)
        }, 6000)
    }

    loadHeader = (tvSeries, movies) =>{
        let i = 0;
        let pre = [];
        while(i < 5 && this.state.headerSlide.length !== 5) {
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
            i++;
        }
        $(".loader").fadeOut(1000);
        setTimeout(()=> {
          this.setState({isLoad: true})
        },1000)
    }

    render() {
        if(!this.state.isLoad){
            return <h1 className="loader">Loading</h1>
        } else {
           return (
                <div className="container">
                    <Header element={this.state.headerSlide}/>
                    <Main tvSeries={this.props.data.popularSeries} movies={this.props.data.popularMovies} horror={this.props.data.horrorMovies} anime={this.props.data.anime}/>
                </div>
            );
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Home);