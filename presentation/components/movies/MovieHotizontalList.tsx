import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";
interface Props {
    movies: Movie[],
    title?: string,
    className?: string
}
const MovieHotizontalList = ({ movies, title, className }: Props) => {
    return (
        <View className={`${className}`}>
            {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} smallPoster={true} />}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
};

export default MovieHotizontalList;
