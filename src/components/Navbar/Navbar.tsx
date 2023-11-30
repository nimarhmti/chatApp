import "./style.scss";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">Picky chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Avatar"
        />
        <span>nima</span>
        <button>log out</button>
      </div>
    </nav>
  );
};
