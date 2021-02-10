import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import GithubRepositories from "./components/github/GithubRepositories";
import Sidebar from "./components/sidebar/Sidebar";
import GithubUserProvider from "./context/github/GithubUserProvider";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <GithubUserProvider>
      <div className="flex justify-center">
        <div className="container flex">
          <button
            className="z-20 fixed m-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <i class="fas fa-times" /> : <i class="fas fa-bars" />}
          </button>
          <Sidebar isOpen={isOpen} />
          <div className={`p-4 pl-10 w-full ${isOpen && "md:ml-72"}`}>
            <GithubRepositories />
          </div>
        </div>
      </div>
    </GithubUserProvider>
  );
}

export default withAuthenticator(App);
