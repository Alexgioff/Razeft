import React from 'react';
import Header from '../components/Header/Header';
import TvSeries from '../components/TvSeries/tvSeries';


const tvSeriesPage = () => {
    return (
        <div className="container">
            <header className="header">
                <Header />
            </header>
            <TvSeries />
        </div>
    )
}


export default tvSeriesPage;