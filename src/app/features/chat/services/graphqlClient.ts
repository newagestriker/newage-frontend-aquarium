import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/graphql';

export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);
export const graphqlRequest = async <T>(document: string, variables: Record<string, unknown>): Promise<T> => {
  return graphqlClient.request(document, variables);
};