import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_GITHUB_USER_INFO } from "../../graphql/queries";
import Button from "../Button";
import GithubUserContext from "../../context/github/GithubUserContext";

function GithubProfile() {
  const { data } = useQuery(GET_GITHUB_USER_INFO);
  const { user, setUser } = useContext(GithubUserContext);

  useEffect(() => {
    if (data) {
      setUser(data?.viewer);
    }
  }, [data, setUser]);

  return (
    <div className="p-4">
      {user && (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative mb-4">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img
                src={user.avatarUrl}
                alt="lovely avatar"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
          <h6>{user.name}</h6>
          <p>{user.login}</p>
          <Button className="mt-2">Edit profile</Button>
          <div className="my-4">
            <p className="text-base">
              <i className="fas fa-building mr-2" />
              {user.company}
            </p>
            <p className="text-base">
              <i className="fas fa-envelope mr-2" />
              {user.email}
            </p>
            <p className="text-base">
              <i className="fas fa-map-marker-alt mr-2" />
              {user.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;
