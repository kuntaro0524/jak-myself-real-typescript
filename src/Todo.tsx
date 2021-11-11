import { TodoType } from "./types/todo";

// todoで定義したTodoTypeの中身の一部だけを props で利用したいときの記述の例１
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed } = props;
  // 完成か未完かを判断するbooleanを見て最初の文字を決める
  const completeMark = completed ? "【完】" : "【未】";
  return <p> {`${completeMark} ${title}(user: ${userId})`} </p>;
};
