import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="menu">
            <h1 className="logo">R<span>azeft</span></h1>
            <nav className="primary_menu">
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/movies" exact activeClassName="active">Movies</NavLink></li>
                <li><NavLink to="/tv" exact activeClassName="active">TV Series</NavLink></li>
            </nav>
            <nav className="menu_dinamic">
                <div className="account">
                    <picture>
                    <source  media="(max-width: 500px)" srcSet={`https://via.placeholder.com/30`} />
                    <source media="(max-width: 780px)" srcSet={`https://via.placeholder.com/40`}/>
                    <source media="(max-width: 1280px)" srcSet={`https://via.placeholder.com/40`} />
                    <img src="https://via.placeholder.com/40" alt="icon" />
                    </picture>
                    <p>name</p>
                </div>
                <div className="my_list">
                        <li><a href="https://google.com">My list</a></li>
                </div>
                <div className="search">
                    <i className="fas fa-search fa-2x"></i>
                </div>
            </nav>
        </div>
        );
}


export default Navbar;