import React, {Component} from 'react';
import Header from '../components/Header/Header';
import TvSeries from '../components/TvSeries/tvSeries';
import {getTvSeries} from '../actions/action';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
      isPedding: state.getShowsTv.isPedding,
      series: state.getShowsTv.series
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetSeries: () => dispatch(getTvSeries())
    }
}


class tvSeriesPage extends Component {
    constructor() {
        super();
        this.state ={
            isLoad: false
        }
    }

    componentDidMount() {
        this.props.onGetSeries();
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
                {!this.state.isLoad ? <h1 className="loader">Loading</h1> : <TvSeries element={this.props.series} /> }
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(tvSeriesPage);