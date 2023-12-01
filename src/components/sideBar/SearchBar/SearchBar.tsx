import { FormEvent, useState } from "react";
import "./style.scss";
export const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};
