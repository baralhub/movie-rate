import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieIcons from '../MovieIcons/MovieIcons';
import './MovieInfo.css';

const MovieInfo = (props) => {
  return (
    <div className="rmdb-movieinfo"
      style={{
        background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
      }}
    >
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieIcons
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
          />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{props.movie.title}</h1>
          
          <p>{props.movie.overview}</p>
          <h3>RATE ME</h3>
          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
            <h2><label className="rmdb-score">{props.movie.vote_average}</label></h2>
          </div><br/><div className="rmdb-director"><br/>
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map( (element, i) => {
            return <h4><label key={i} className="rmdb-director">{element.name}</label></h4>
          })}
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default MovieInfo;