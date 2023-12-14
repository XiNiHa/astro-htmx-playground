import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    "User-Agent": "graphql-request",
  },
});
