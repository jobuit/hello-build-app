import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_GITHUB_REPOSITORIES } from "../../graphql/queries";
import { formatWordToFilter } from "../../utils/helpers/format";
import Repository from "./Repository";
import SearchRepository from "./SearchRepository";

function GithubRepositories() {
  const { data, refetch } = useQuery(GET_GITHUB_REPOSITORIES);
  const [filter, setFilter] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [favRepositories, setFavRepositories] = useState([]);

  useEffect(() => {
    if (data) {
      const reposit = data?.viewer?.repositories?.nodes;
      const repos = reposit?.filter((item) => item.stargazerCount === 1);
      setFavRepositories(repos);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const reposit = data?.viewer?.repositories?.nodes;
      const repos = reposit?.filter((item) => {
        const n = formatWordToFilter(item.name).indexOf(
          formatWordToFilter(filter)
        );
        if (n >= 0) {
          return true;
        }
        return false;
      });
      setRepositories(repos);
    }
  }, [filter, data]);

  return (
    <div>
      {favRepositories.length > 0 && (
        <div>
          <h2>Favorite repositories</h2>
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mb-8">
            {favRepositories?.map((item) => (
              <Repository key={item.id} repository={item} refetch={refetch} />
            ))}
          </div>
        </div>
      )}
      {repositories.length > 0 && (
        <div>
          <h2>Your repositories</h2>
          <div className="flex justify-end w-full">
            <SearchRepository value={filter} setValue={setFilter} />
          </div>
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
            {repositories?.map((item) => (
              <Repository key={item.id} repository={item} refetch={refetch} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubRepositories;
