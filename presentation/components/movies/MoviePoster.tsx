import React from "react";
import { Image, Pressable } from "react-native";


interface Props {
    poster: string;
    id: number;
    smallPoster?: boolean;
    className?: string;
}

const MoviePoster = ({ poster, id, smallPoster = false, className }: Props) => {
    return (
        <Pressable
            className={`active:opacity-50 px-2 ${className}`}
        >
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-2xl w-full h-full"
                style={{
                    width: smallPoster ? 80 : 150,
                    height: smallPoster ? 130 : 250,
                    marginHorizontal: 5,
                    borderRadius: 20,
                }}
                resizeMode="cover"
            />
        </Pressable>
    );
};

export default MoviePoster;
