import { gql } from "@apollo/client";

export const GET_GITHUB_USER_INFO = gql`
  query {
    viewer {
      id
      avatarUrl
      email
      name
      login
      company
      location
    }
  }
`;

export const GET_GITHUB_REPOSITORIES = gql`
  query {
    viewer {
      repositories(last: 20) {
        nodes {
          id
          url
          createdAt
          forkCount
          isPrivate
          updatedAt
          sshUrl
          name
          stargazerCount
          collaborators {
            nodes {
              id
              name
              avatarUrl
              email
            }
          }
        }
      }
    }
  }
`;
