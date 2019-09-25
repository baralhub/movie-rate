import React from 'react';
import './MovieIcons.css';
import { Link } from 'react-router-dom';

const MovieIcons = (props) => {
    return (
        <div className="rmdb-MovieIcons">
            {props.clickable ?
            <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
            <img src={props.image} alt="MovieIcons" />
            </Link>
            :
            <img src={props.image} alt="MovieIcons" />
            }
        </div>
    )
}

export default MovieIcons;