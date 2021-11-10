import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { Todo } from "./Todo";

export default function App() {
  // stateに対する型の指定方法　いったん <any> 型にしてみる
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Button onClick={onClickFetchData}> data acquisition </Button>
        {todos.map((todo) => (
          <Todo key={todo.title} title={todo.title} userid={todo.userid} />
        ))}
      </div>
    </ChakraProvider>
  );
}
