import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt> Name </dt>
      <dd> {user.name} </dd>
      <dt> Hoby </dt>
      {/* オプショナルチェイニングを利用
      Userという型の中に定義されていない hobbies があれば nullを返す */}
      <dd> {user.hobbies?.join(" / ")} </dd>
    </dl>
  );
};
