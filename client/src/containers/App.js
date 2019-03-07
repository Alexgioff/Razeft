import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Home/Main';

import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoad: false,
      tvSeries: [],
      movies: [],
      horror: [],
      scifiFantasySeries: [],
      headerSlide: []
    }
  }


  componentDidMount() {
    this.loadHeader();
  }

  loadHeader = () =>{
    fetch('api/data')
        .then(data => data.json())
        .then(data => {
            this.setState({
                tvSeries: data.popularSeries,
                movies: data.popularMovies,
                horror: data.horrorMovies,
                scifiFantasySeries: data.scifiFantasySeries
            })
        })
        .then(data => {
            let i = 0;
            let pre = [0];
            while(i < 5 && this.state.headerSlide.length !== 5) {
                let number = Math.floor(Math.random() * 20 );
                pre.forEach(num => {
                  if(number === num){
                    number++;
                  }
                })
                if(number % 2 === 0 && this.state.tvSeries[number].backdrop_path != null){
                    let newElement = [...this.state.headerSlide, this.state.tvSeries[number]];
                    this.setState({headerSlide: newElement})
                } else  if(this.state.movies[number].backdrop_path != null){
                    let newElement = [...this.state.headerSlide, this.state.movies[number]];
                    this.setState({headerSlide: newElement})
                }
                pre.push(number);
                i++;
            }
        })
        .then(() => {
          $(".loader").fadeOut(1000);
          setTimeout(()=> {
            this.setState({isLoad: true})
          },1000)
        })
        .catch(err => console.log(err));
  }

  render() {
      if(!this.state.isLoad){
        return <h1 className="loader">Loading</h1>
      } else {
        return (
          <div className="container">
            <Header element={this.state.headerSlide}/>
            <Main tvSeries={this.state.tvSeries} movies={this.state.movies} horror={this.state.horror} scifiFantasySeries={this.state.scifiFantasySeries}/> 
          </div>
        );
      }
  }
}

export default App;
