import { nowPlayingAction } from "@/core/actions/movies/new-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upconming.actions"
import { useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24,
    })


    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24,
    })
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24,
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        popularQuery,
        nowPlayingQuery,
        topRatedQuery,
        upcomingQuery
    }
}
