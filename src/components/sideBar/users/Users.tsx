import "./style.scss";
import { UserItem } from "./userItem";
export const Users = () => {
  return (
    <div className="UserContainer">
      <ul>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </ul>
    </div>
  );
};
