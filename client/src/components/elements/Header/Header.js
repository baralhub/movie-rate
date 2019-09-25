import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                <img className="movie-rate-logo" src="./images/Movie_rate_logo.png" alt="movie-rate-logo" />
                </Link>
            </div>
        </div>
    )
}

export default Header;