import { useNavigate } from "react-router-dom";

import ProfileInfo from "../Cards/ProfileInfo";

const NavBar = () => {
  const naviage = useNavigate();
  const onLogout = () => {
    naviage("/login");
  };

  return (
    <header className="bg-white flex items-center justify-between py-6 px-2 drop-shadow">
      <h2 className="text-black py-2 font-medium">NoterTaker</h2>

      <ProfileInfo onLogout={onLogout} />
    </header>
  );
};

export default NavBar;
