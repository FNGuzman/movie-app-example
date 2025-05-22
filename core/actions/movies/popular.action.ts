import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import axios from 'axios';

export const popularMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>('/popular', {
            params: {
                language: 'es-MX',
                page: 1
            }
        });
        const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
        console.log(movies);
        return movies;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error detallado:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data
            });

            if (!error.response) {
                throw new Error('Error de red. Por favor, verifica tu conexión a internet.');
            }
            if (error.response.status === 401) {
                throw new Error('Token de autorización inválido. Por favor, verifica tu token.');
            }
            throw new Error(`Error al obtener películas: ${error.message}`);
        }
        throw new Error('Error desconocido al obtener películas');
    }
}
