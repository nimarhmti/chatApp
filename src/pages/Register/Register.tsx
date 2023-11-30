import "./style.scss";
import addAvatar from "../../assets/img/addAvatar.png";
export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">picky Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="userName" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*,.pdf"
            id="file"
          />
          <label htmlFor="file" className="fileReader">
            <img src={addAvatar} alt="addFile" />
            <span>add Avatar</span>
          </label>
          <button type="submit">sign in</button>
        </form>
        <p>
          do you have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};
