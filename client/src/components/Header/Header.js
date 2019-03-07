import React from 'react';

import './Header.css';

import Navbar from './Menu/Navbar';
import Slideshow from './Slideshow/Slideshow';

const Header = ({element}) => {
    return(
        <header className="header">
         <Navbar />
        <Slideshow element={element} /> 
        </header>
    )
};

export default Header;



