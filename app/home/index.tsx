import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHotizontalList from "@/presentation/components/movies/MovieHotizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {

    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()
    const safeArea = useSafeAreaInsets()
    if (nowPlayingQuery.isLoading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <ScrollView>
            <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
                <Text className="text-2xl font-bold px-4 mb-2">Movies App</Text>
                {/* Carousel */}
                <MainSlideShow movies={nowPlayingQuery.data ?? []} />
                {/* peliculas populares */}
                <MovieHotizontalList className="mb-5" title="Peliculas Populares" movies={popularQuery.data ?? []} />
                {/* top rated */}
                <MovieHotizontalList className="mb-5" title="Peliculas Mejor Calificadas" movies={topRatedQuery.data ?? []} />
                {/* upcoming */}
                <MovieHotizontalList className="mb-5" title="Peliculas Próximas" movies={upcomingQuery.data ?? []} />
                <MovieHotizontalList className="mb-5" title="Peliculas Próximas" movies={upcomingQuery.data ?? []} />
            </View>
        </ScrollView>
    )



};

export default HomeScreen;
