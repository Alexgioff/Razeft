import React from 'react';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';


const MoviesPage = () => {
    return (
        <div className="container">
            <header className="header">
                <Header />
            </header>
            <Movies />
        </div>
    )
}


export default MoviesPage;