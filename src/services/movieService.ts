import axios from 'axios';
import { Movie } from '../types/movie';

interface TMDBResponse {
    results: Movie[];
    total_pages: number;
}

// Error: Function missing page parameter
export const fetchMovies = async (query: string): Promise<TMDBResponse> => {
    const response = await axios.get<TMDBResponse>(
        'https://api.themoviedb.org/3/search/movie',
        {
            params: {
                query,
                page: 1, // Hardcoded instead of using parameter
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
        },
    );
    return response.data;
};
