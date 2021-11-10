export const Todo = (props) => {
  const { title, userid, completed } = props;
  // 完成か未完かを判断するbooleanを見て最初の文字を決める
  const completeMark = completed ? "【完】" : "【未】";
  return <p> {`${completeMark} ${title}(user: ${userid})`} </p>;
};