import axios from "axios";
import { apiKey } from '../constants'
import React from "react";

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`
const searchMovieEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;


// dynamic endpoints
const movieDetailsEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const movieSimilarEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetailsEndpoint = (id: string) => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = (id: string) => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

export const image500 = (path: string) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path: string) => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path: string) => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://www.movienewz.com/img/films/poster-holder.jpg';
export const fallbackPersonPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HrKlpj9CgB10PH4EfObR0TOR_pT99Y8szryJU0zqiDrh_1xlVEzm0l07TmFwEs4STPA&usqp=CAU';

const apiCall = async (endpoint: any, params?: any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.log('error: ', error)
        return {}
    }
}

export const fecthTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}

export const fetchMovieDetails = (id: string) => {
    return apiCall(movieDetailsEndpoint(id));
}

export const fetchMovieCredits = (id: string) => {
    return apiCall(movieCreditsEndpoint(id));
}

export const fecthSimilarMovies = (id: string) => {
    return apiCall(movieSimilarEndpoint(id));
}

export const fecthPersonDetails = (id: string) => {
    return apiCall(personDetailsEndpoint(id));
}

export const fecthPersonMovies = (id: string) => {
    return apiCall(personMoviesEndpoint(id));
}

export const searchMovies = (params: string) => {

    return apiCall(searchMovieEndpoint, params)
}