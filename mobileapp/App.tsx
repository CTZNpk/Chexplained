import { StatusBar } from "expo-status-bar";
import "./global.css";

import { SafeAreaView, Text, useWindowDimensions, View } from "react-native";

type Piece =
  | "r"
  | "n"
  | "b"
  | "q"
  | "k"
  | "p"
  | "P"
  | "R"
  | "N"
  | "B"
  | "Q"
  | "K";
type Square = Piece | null;

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

const startingPosition: Square[][] = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceGlyphs: Record<Piece, string> = {
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  p: "♟",
  P: "♙",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
};

const pieceNames: Record<Piece, string> = {
  r: "black rook",
  n: "black knight",
  b: "black bishop",
  q: "black queen",
  k: "black king",
  p: "black pawn",
  P: "white pawn",
  R: "white rook",
  N: "white knight",
  B: "white bishop",
  Q: "white queen",
  K: "white king",
};

export default function App() {
  const { width } = useWindowDimensions();
  const boardSize = Math.min(width - 32, 380);
  const squareSize = boardSize / 8;

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

        <View className="items-center">
          <View
            accessibilityLabel="Chessboard showing the standard starting position"
            accessibilityRole="image"
            className="overflow-hidden rounded-lg border-4 border-stone-800 shadow-2xl"
            style={{ width: boardSize, height: boardSize }}
          >
            {startingPosition.map((rank, rowIndex) => (
              <View className="flex-row" key={`rank-${8 - rowIndex}`}>
                {rank.map((piece, columnIndex) => {
                  const isLightSquare = (rowIndex + columnIndex) % 2 === 0;
                  const squareName = `${files[columnIndex]}${8 - rowIndex}`;

                  return (
                    <View
                      accessibilityLabel={
                        piece
                          ? `${squareName}, ${pieceNames[piece]}`
                          : `${squareName}, empty square`
                      }
                      className={
                        isLightSquare ? "bg-amber-100" : "bg-emerald-700"
                      }
                      key={squareName}
                      style={{
                        width: squareSize,
                        height: squareSize,
                      }}
                    >
                      <View className="absolute left-1 top-0.5">
                        <Text
                          className={
                            isLightSquare
                              ? "text-[10px] font-semibold text-emerald-900/70"
                              : "text-[10px] font-semibold text-amber-100/80"
                          }
                        >
                          {columnIndex === 0 ? 8 - rowIndex : ""}
                        </Text>
                      </View>

                      <View className="flex-1 items-center justify-center">
                        {piece ? (
                          <Text
                            className={
                              piece === piece.toUpperCase()
                                ? "text-stone-50"
                                : "text-stone-950"
                            }
                            style={{
                              fontSize: squareSize * 0.58,
                              lineHeight: squareSize * 0.68,
                              textShadowColor:
                                piece === piece.toUpperCase()
                                  ? "#1c1917"
                                  : "#fafaf9",
                              textShadowOffset: { width: 0, height: 1 },
                              textShadowRadius: 1,
                            }}
                          >
                            {pieceGlyphs[piece]}
                          </Text>
                        ) : null}
                      </View>

                      <View className="absolute bottom-0.5 right-1">
                        <Text
                          className={
                            isLightSquare
                              ? "text-[10px] font-semibold text-emerald-900/70"
                              : "text-[10px] font-semibold text-amber-100/80"
                          }
                        >
                          {rowIndex === 7 ? files[columnIndex] : ""}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
