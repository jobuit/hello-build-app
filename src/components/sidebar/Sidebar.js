import GithubProfile from "../github/GithubProfile";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SidebarLinks from "./SideBarLinks";

function Sidebar() {
  return (
    <div className="shadow-sm w-64 bg-gray-100 min-h-screen flex flex-col items-center">
      <GithubProfile />
      <SidebarLinks />
      <AmplifySignOut className="btn-sign-out" />
    </div>
  );
}

export default Sidebar;
