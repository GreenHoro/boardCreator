import Head from "next/head";
import Image from "next/image";
import { Board } from "../components/Board";

import { Box } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box w="98vw" h="100vh" bg="blue.500">
      <Board />
    </Box>
  );
}
