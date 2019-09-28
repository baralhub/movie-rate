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
          {props.directors.length > 1 ? <h3></h3> : <h3></h3>}
          {props.directors.map( (element, i) => {
            return <h4><label key={i} className="rmdb-director">Directed by: {element.name}</label></h4>
          })}
          
          <p>{props.movie.overview}</p>
          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
            
            
            
            
          </div>
          
          <div class="rate">
          
            <input type="radio" id="star10" name="rate" value="10" />
            <label for="star10" title="text">10 stars</label>
            <input type="radio" id="star9" name="rate" value="9" />
            <label for="star9" title="text">9 stars</label>
            <input type="radio" id="star8" name="rate" value="8" />
            <label for="star8" title="text">8 stars</label>
            <input type="radio" id="star7" name="rate" value="7" />
            <label for="star7" title="text">7 stars</label>
            <input type="radio" id="star6" name="rate" value="6" />
            <label for="star6" title="text">6 stars</label>
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <div className="rmdb-score">
        <label >{props.movie.vote_average}</label>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default MovieInfo;