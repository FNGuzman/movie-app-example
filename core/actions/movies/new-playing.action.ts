import { movieApi } from "@/core/api/movie-api";
import axios from 'axios';

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get('/now_playing', {
            params: {
                language: 'en-US',
                page: 1
            }
        });
        return data.results;
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
