import { useCallback, useState } from "react";
import { useWindowDimensions, View } from "react-native";
import Chessboard, { DefaultThemes } from "dawikk-chessboard";
import { Chess } from "chess.js";

import { STARTING_POSITION_FEN } from "./constants";

export function ChessBoard() {
  const { width } = useWindowDimensions();
  const boardSize = Math.min(width - 32, 400);
  const [game] = useState(() => new Chess(STARTING_POSITION_FEN));
  const [fen, setFen] = useState(STARTING_POSITION_FEN);

  const handleMove = useCallback(
    (from: string, to: string, promotion?: string) => {
      game.move({ from, to, promotion });
      setFen(game.fen());
    },
    [game],
  );

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
          fen={fen}
          onMove={handleMove}
          perspective="white"
          showCoordinates
        />
      </View>
    </View>
  );
}
