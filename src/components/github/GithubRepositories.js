import { useQuery } from "@apollo/client";
import moment from "moment";
import { GET_GITHUB_REPOSITORIES } from "../../graphql/queries";

function GithubRepositories() {
  const { data } = useQuery(GET_GITHUB_REPOSITORIES);
  console.log(data);
  return (
    <div>
      <h2>Your repositories</h2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        {data?.viewer?.repositories?.nodes.map((item, i) => (
          <div className="shadow p-4 relative flex flex-col" key={i}>
            <div className="justify-between flex">
              <p className="cursor-pointer">
                <i class="fas fa-star" />
              </p>
              <p className="text-xs">
                {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss")}
              </p>
            </div>
            <div className="mb-3">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <p className="text-xs truncate">{item.sshUrl}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-4">
                {item.isPrivate ? (
                  <p className="text-xs">
                    <i className="fas fa-lock mr-1" />
                    Private
                  </p>
                ) : (
                  <p className="text-xs">
                    <i className="fas fa-unlock-alt mr-1" />
                    Public
                  </p>
                )}
                <p className="text-xs">
                  <i className="fas fa-code-branch mr-1" />
                  {item.forkCount}
                </p>
              </div>
              <div className="flex">
                {item?.collaborators?.nodes.map((item) => (
                  <div className="w-5 h-5 relative mb-4">
                    <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                      <img
                        src={item.avatarUrl}
                        alt="lovely avatar"
                        className="object-cover object-center w-full h-full visible group-hover:hidden"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubRepositories;
