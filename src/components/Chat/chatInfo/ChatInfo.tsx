import cam from "../../../assets/img/cam.png";
import more from "../../../assets/img/more.png";
import add from "../../../assets/img/add.png";
export const ChatInfo = () => {
  return (
    <div className="chat-info">
      <h5>nima</h5>
      <div className="chat-Feature">
        <img src={cam} alt="camera" />
        <img src={add} alt="add Contact" />
        <img src={more} alt="more option" />
      </div>
    </div>
  );
};
