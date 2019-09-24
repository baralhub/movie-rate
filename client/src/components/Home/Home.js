import React, { Component } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import './Home.css';
import FeaturedImage from '../elements/FeaturedImage/FeaturedImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import Grid from '../elements/Grid/Grid';
import MovieIcons from '../elements/MovieIcons/MovieIcons';
import ScrollButton from '../elements/ScrollButton/ScrollButton';
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
        this.setState({ loading: true });
        // const endpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=836d48f2f9e0a1dc54dab44c89afdeda';
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        this.fetchItems(endpoint);

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
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchKeyword}`;
        }
        this.fetchItems(endpoint);

    }

    loadMore = () => {
        let endpoint = '';
        this.setState({ loading: true });

        if (this.state.searchKeyword === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchKeyword}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState ({
                movies: [...this.state.movies, result.results],
                featuredImage: this.state.featuredImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
             })
         })
        }
        
    render() {
        return (
            <div className='rmdb-home'>
                {this.state.featuredImage ?
                <div>
                <FeaturedImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${this.state.featuredImage.backdrop_path}`}
                title={this.state.featuredImage.original_title}
                text={this.state.featuredImage.overview}

                />
                <SearchBar callback={this.searchItems} />
                </div> : null }
               
                <Grid />
                <Loader />
                <ScrollButton />
                
            </div>
        )
    }
}

export default Home;


