import GithubProfile from "../github/GithubProfile";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SidebarLinks from "./SideBarLinks";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`shadow-sm w-72 bg-gray-100 min-h-screen flex-col items-center fixed z-10 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <GithubProfile />
      <SidebarLinks />
      <AmplifySignOut className="btn-sign-out" />
    </div>
  );
}

export default Sidebar;
