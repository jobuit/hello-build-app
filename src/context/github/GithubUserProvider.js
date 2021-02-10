import React, { useState } from "react";
import GithubUserContext from "./GithubUserContext";

export default function GithubUserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <GithubUserContext.Provider value={{ user, setUser }}>
      {children}
    </GithubUserContext.Provider>
  );
}
