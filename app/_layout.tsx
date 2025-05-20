import { nowPlayingAction } from "@/core/actions/movies/new-playing.action";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import "./global.css";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await nowPlayingAction();
        setMovies(data);
      } catch (err) {
        console.error('Error al obtener películas:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar las películas');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-lg text-center">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-3xl font-bold">Movie App</Text>
      <Text className="mt-4">Películas encontradas: {movies.length}</Text>
    </View>
  );
};

export default RootLayout;
