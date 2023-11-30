import "./style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">picky Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">sign in</button>
        </form>
        <p>
          do you have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
