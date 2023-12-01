import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Users } from "./users/Users";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <SearchBar />
      <Users />
    </div>
  );
};
