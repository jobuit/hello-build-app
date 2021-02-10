import { withAuthenticator } from "@aws-amplify/ui-react";
import GithubRepositories from "./components/github/GithubRepositories";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex justify-center">
      <div className="container flex">
        <Sidebar />
        <div className="p-4 w-full">
          <GithubRepositories />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
