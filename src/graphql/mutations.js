export const addStarRepository = `
mutation AddStarRepository {
    addStar(input: {
      starrableId: "MDEwOlJlcG9zaXRvcnkxNDUwMjg5Mzk=", 
      clientMutationId: "MDQ6VXNlcjI4MjAxMDc5"}) {
      clientMutationId
    }
  }
`;

export const removeStarRepository = `
mutation RemoveStarRepository {
    removeStar(input: {
        starrableId: "MDEwOlJlcG9zaXRvcnkxNDUwMjg5Mzk=", 
        clientMutationId: "MDQ6VXNlcjI4MjAxMDc5"}) {
        clientMutationId
      }
  }
`;
