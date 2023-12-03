import { ChatInfo } from "./ChatInfo";
import "../style.scss";
import { Messages } from "../Message/Messages";
import { Input } from "../Input/Input";
export const Chat = () => {
  return (
    <div className="chat">
      <ChatInfo />
      <Messages />
      <Input />
    </div>
  );
};
