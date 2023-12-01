import { SideBar } from "../../components/sideBar/SideBar";
import { Chat } from "../../components/Chat/Chat";
import "./style.scss";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};
