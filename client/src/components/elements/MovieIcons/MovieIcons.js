import React from 'react';
import './MovieIcons.css';

const MovieIcons = (props) => {
    return (
        <div className="rmdb-moviethumb">
            <img src={props.image} alt="moviethumb" />
        </div>
    )
}

export default MovieIcons;