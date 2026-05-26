import { useWindowDimensions, View } from "react-native";
import Chessboard, { DefaultThemes } from "dawikk-chessboard";

const STARTING_POSITION_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const ignoreReadonlyMove = () => undefined;

export function StartingChessboard() {
  const { width } = useWindowDimensions();
  const boardSize = Math.min(width - 32, 400);

  return (
    <View className="items-center">
      <View
        accessibilityLabel="Chessboard showing the standard starting position"
        accessibilityRole="image"
        className="overflow-hidden rounded-lg border-4 border-stone-800 bg-stone-900 shadow-2xl"
        style={{ width: boardSize, height: boardSize }}
      >
        <Chessboard
          boardTheme={DefaultThemes.green}
          fen={STARTING_POSITION_FEN}
          onMove={ignoreReadonlyMove}
          perspective="white"
          readonly
          showCoordinates
        />
      </View>
    </View>
  );
}
