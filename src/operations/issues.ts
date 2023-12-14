import { graphql } from "@/gql";
import { client } from "./client";

export const IssueSummaryFragment = graphql(`
  fragment IssueSummary on Issue {
    title
    state
    author {
      login
    }
  }
`);

export function loadIssues(
  repo: { owner: string; name: string },
  cursors: { first: number; after?: string } | { last: number; before?: string }
) {
  const query = graphql(`
    query Issues(
      $owner: String!
      $name: String!
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      repository(owner: $owner, name: $name) {
        issues(
          first: $first
          after: $after
          last: $last
          before: $before
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          nodes {
            ...IssueSummary
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  `);

  return client.request(query, {
    owner: repo.owner,
    name: repo.name,
    ...cursors,
  });
}
