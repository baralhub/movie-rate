import React from 'react';
import './MovieIcons.css';
import { Link } from 'react-router-dom';

const MovieIcons = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ?
            <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
            <img src={props.image} alt="moviethumb" />
            </Link>
            :
            <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

export default MovieIcons;