import { SideBard } from "../../components/sideBar/SideBard";
import { Chat } from "../../components/Chat/Chat";
import "./style.scss";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBard />
        <Chat />
      </div>
    </div>
  );
};
