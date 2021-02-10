import { BrowserRouter } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import GithubUserProvider from "./context/github/GithubUserProvider";
import Routes from "./routes/Router";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <GithubUserProvider>
      <BrowserRouter>
        <div className="flex justify-center">
          <div className="container flex">
            <button
              className="z-20 fixed m-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <i className="fas fa-times" />
              ) : (
                <i className="fas fa-bars" />
              )}
            </button>
            <Sidebar isOpen={isOpen} />
            <div className={`p-4 pl-10 w-full ${isOpen && "md:ml-72"}`}>
              <Routes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </GithubUserProvider>
  );
}

export default withAuthenticator(App);
