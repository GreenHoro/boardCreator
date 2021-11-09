import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const diversifyColors = (rows, numberOfColors, currentIndex) => {
  if (numberOfColors % 2 !== 0) return currentIndex % numberOfColors;
  if (Math.floor(currentIndex / rows) % 2 === 0)
    return currentIndex % numberOfColors;
  return (currentIndex % numberOfColors) + 1 >= numberOfColors
    ? 0
    : (currentIndex % numberOfColors) + 1;
};
export const Board = ({ Rows, Columns, SquareSize, Colors }) => {
  const setPropierties = (state, action) => {
    return state;
  };

  const [boardPropierties, dispatchBoardPropierties] = React.useReducer(
    setPropierties,
    {
      totalSquares: 64,
      rows: 8,
      columns: 8,
      squareSize: "40px",
      colors: ["black", "white"],
      boardSize: { height: "320px", width: "320px" },
    }
  );

  React.useEffect(() => {
    console.log("aaaaaaa");
  }, [Rows, Columns, SquareSize, Colors]);
  // boardPropierties["colors"].length
  return (
    <Grid
      templateColumns={`repeat(${boardPropierties["columns"]}, 1fr)`}
      templateRows={`repeat(${boardPropierties["rows"]}, 1fr)`}
      alignContent="center"
      justifyContent="center"
      gap={0}
      height={boardPropierties["boardSize"]["height"]}
      width={boardPropierties["boardSize"]["width"]}
      boxSizing="border-box"
      border="white solid 1px"
    >
      {[...new Array(boardPropierties["totalSquares"])].map((_, i) => (
        <GridItem
          h={boardPropierties["squareSize"]}
          w={boardPropierties["squareSize"]}
          bg={
            boardPropierties["colors"][
              diversifyColors(
                boardPropierties["rows"],
                boardPropierties["colors"].length,
                i
              )
            ]
          }
        />
      ))}
    </Grid>
  );
};
