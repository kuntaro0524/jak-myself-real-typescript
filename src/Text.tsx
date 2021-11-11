type Props = {
  color: string;
  fontSize: string;
};

export const Text = (props: Props) => {
  const { color, fontSize } = props;
  // スタイルを当てるとき、変数名とprops名が同じならばそのまま書ける
  return <p style={{ color, fontSize }}> Text death. </p>;
};
