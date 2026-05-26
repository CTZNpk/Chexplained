import { StatusBar } from "expo-status-bar";
import "./global.css";

import { SafeAreaView, Text, View } from "react-native";

import { StartingChessboard } from "./src/components/StartingChessboard";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-stone-950">
      <View className="flex-1 justify-center gap-8 px-4 py-8">
        <View className="gap-3">
          <Text className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Chexplained
          </Text>
          <Text className="text-4xl font-bold text-stone-50">
            Starting position
          </Text>
          <Text className="max-w-md text-base leading-7 text-stone-300">
            A clean chessboard view for the mobile app, ready for game logic and
            lesson overlays in later PRs.
          </Text>
        </View>

        <StartingChessboard />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
