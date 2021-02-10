import moment from "moment";

function Repository({ repository }) {
  return (
    <div className="shadow p-4 relative flex flex-col" key={repository.id}>
      <div className="justify-between flex">
        <p className="cursor-pointer">
          {repository.stargazerCount ? (
            <i class="fas fa-star" />
          ) : (
            <i class="far fa-star" />
          )}
        </p>
        <p className="text-xs">
          {moment(repository.createdAt).format("MMMM Do YYYY")}
        </p>
      </div>
      <div className="mb-3">
        <a href={repository.url} target="_blank" rel="noreferrer">
          {repository.name}
        </a>
        <p className="text-xs truncate">{repository.sshUrl}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          {repository.isPrivate ? (
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
            {repository.forkCount}
          </p>
        </div>
        <div className="flex">
          {repository?.collaborators?.nodes.map((collaborator) => (
            <div className="w-5 h-5 relative mb-4">
              <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <img
                  src={collaborator.avatarUrl}
                  alt="lovely avatar"
                  className="object-cover object-center w-full h-full visible group-hover:hidden"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Repository;
