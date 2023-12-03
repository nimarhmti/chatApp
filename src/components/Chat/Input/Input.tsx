import attach from "../../../assets/img/attach.png";
export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type somethings..." />
      <div className="send">
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={attach} alt="attach file icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
