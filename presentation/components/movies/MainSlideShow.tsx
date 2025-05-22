import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
    movies: Movie[]
}

const MainSlideShow = ({ movies }: Props) => {

    const width = useWindowDimensions().width
    return (
        <View

            className="h-[250px] w-full"
        >
            <Carousel

                data={movies}
                height={250}
                width={200}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} />}
                style={{
                    width: width,
                    height: 250,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={0}
            />
        </View>
    );
};

export default MainSlideShow;
