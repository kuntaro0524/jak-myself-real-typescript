import { Box, Button, ChakraProvider } from "@chakra-ui/react";
// import "./styles.css";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box bg="tomato">
          <Button colorScheme="green" bg="#ff0000" _hover={{ bg: "#00ff00" }}>
            Fuck you
          </Button>
        </Box>
      </div>
    </ChakraProvider>
  );
}
