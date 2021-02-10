import { gql } from "@apollo/client";

export const ADD_FAV_REPOSITORY = gql`
  mutation AddStarToIssue($repoId: ID!, $userId: String!) {
    addStar(input: { starrableId: $repoId, clientMutationId: $userId }) {
      clientMutationId
    }
  }
`;

export const REMOVE_FAV_REPOSITORY = gql`
  mutation RemoveStarRepository($repoId: ID!, $userId: String!) {
    removeStar(input: { starrableId: $repoId, clientMutationId: $userId }) {
      clientMutationId
    }
  }
`;
