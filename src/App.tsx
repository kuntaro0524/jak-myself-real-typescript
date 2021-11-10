import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

export default function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Button onClick={onClickFetchData}> data acquisition </Button>
      </div>
    </ChakraProvider>
  );
}
