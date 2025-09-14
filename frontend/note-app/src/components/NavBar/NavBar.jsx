import { useNavigate } from "react-router-dom";

import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const naviage = useNavigate();
  const onLogout = () => {
    naviage("/login");
  };
  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header className="bg-white flex items-center justify-between py-6 px-2 drop-shadow">
      <h2 className="text-black py-2 font-medium">NoterTaker</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </header>
  );
};

export default NavBar;
