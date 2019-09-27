import React, { Component } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import './Home.css';
import FeaturedImage from '../elements/FeaturedImage/FeaturedImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import Grid from '../elements/Grid/Grid';
import MovieIcons from '../elements/MovieIcons/MovieIcons';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Loader from '../elements/Loader/Loader';


class Home extends Component {
    state = {
        movies: [],
        featuredImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchKeyword: ''
    }

    componentDidMount() {
        if (localStorage.getItem('HomeState')) {
            const state = JSON.parse(localStorage.getItem('HomeState'));
            this.setState({ ...state });
        } else {
        this.setState({ loading: true });
        // const endpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=836d48f2f9e0a1dc54dab44c89afdeda';
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint);
        }
    }

    searchItems = (searchKeyword) => {
        console.log(searchKeyword);
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchKeyword
        })
    
        if(searchKeyword === '') {
            endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-09-21&primary_release_date.lte=2019-09-28&language=en-US&page=1`;
            // endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchKeyword}`;
        }
        this.fetchItems(endpoint);

    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });

        if (this.state.searchKeyword === '') {
            endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-09-21&primary_release_date.lte=2019-09-28&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchKeyword}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState ({
                movies: [...this.state.movies, ...result.results],
                featuredImage: this.state.featuredImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
             }, ()=> {
                 if (this.state.searchKeyword === ""){
                 localStorage.setItem('HomeState', JSON.stringify(this.state));
                 }
             })
         })
         .catch(error => console.error('Error:', error))
        }
        
    render() {
        return (
            <div className='rmdb-home'>
                {this.state.featuredImage ?
                <div>
                <FeaturedImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.featuredImage.backdrop_path}`}
                title={this.state.featuredImage.original_title}
                text={this.state.featuredImage.overview}

                />
                <SearchBar callback={this.searchItems} />
                </div> : null }
               
                <div className="rmdb-home-grid">
                    <Grid
                    header={this.state.searchKeyword ? 'Search Result' : 'Now Playing Movies in Theaters Near You'}
                    loading={this.state.loading}
                    >
                        
                    {this.state.movies.map ( (element, i) => {
                        return (<MovieIcons
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                        movieId={element.id}
                        movieName={element.original_title}
                        
                        />
                        )
                        
                    })}  
                    
                    </Grid>
                    {this.state.loading ? <Loader /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                    <LoadMoreBtn text="Show More Movies >>>" onClick={this.loadMoreItems} />
                    :null }
                </div>
               
                
                
            </div>
        )
    }
}

export default Home;


