import { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import Screen from "./Screen";

export function Main() {
    const [games, setGames] = useState([])
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then(games => {
            setGames(games)
        })
    }, [])


    return (
        <Screen>
            {games.length === 0 ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
                />
            )}
        </Screen>
    );
}

