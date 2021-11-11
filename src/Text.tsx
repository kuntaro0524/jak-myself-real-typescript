import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// 実際には以下の書き方のほうが一般的
// Functional Component として定義してあげる
// その場合には props: Props みたいな型指定ではなく
// ところがこのFCは「暗黙のうちに」 childrenを受け取る仕様になっていてバグの温床になりそう
// ということで ver17 であるうちは VFC というものを利用するということにしておけば良い
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  // スタイルを当てるとき、変数名とprops名が同じならばそのまま書ける
  return <p style={{ color, fontSize }}> Text death. </p>;
};
