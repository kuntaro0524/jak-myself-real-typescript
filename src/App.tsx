import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";

// ユーザのプロファイルを一つ定義してみる
const user: User = {
  name: "平田邦生"
  // hobbies: ["ゲーム", "映画"]
};

export default function App() {
  // stateに対する型の指定方法　ここも TodoTypeで指定
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // TodoTypeのアレイ型の場合は以下のような指定方法
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <ChakraProvider>
      <div className="App">
        {/* 設定したユーザのプロファイルを表示する */}
        <UserProfile user={user} />
        <Text color="red" fontSize="18px" />
        <Button onClick={onClickFetchData}> data acquisition </Button>
        {todos.map((todo) => (
          <Todo
            key={todo.title}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
      </div>
    </ChakraProvider>
  );
}
