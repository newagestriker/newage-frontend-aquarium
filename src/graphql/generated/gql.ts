/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetThreads {\n    getThreads\n  }\n": typeof types.GetThreadsDocument,
    "\n  query GetThreadHistory($threadId: String!) {\n    getThreadHistory(threadId: $threadId) {\n      role\n      content\n    }\n  }\n": typeof types.GetThreadHistoryDocument,
    "\n  mutation ClearHistory($userId: String!) {\n    clearHistory(userId: $userId)\n  }\n": typeof types.ClearHistoryDocument,
};
const documents: Documents = {
    "\n  query GetThreads {\n    getThreads\n  }\n": types.GetThreadsDocument,
    "\n  query GetThreadHistory($threadId: String!) {\n    getThreadHistory(threadId: $threadId) {\n      role\n      content\n    }\n  }\n": types.GetThreadHistoryDocument,
    "\n  mutation ClearHistory($userId: String!) {\n    clearHistory(userId: $userId)\n  }\n": types.ClearHistoryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetThreads {\n    getThreads\n  }\n"): (typeof documents)["\n  query GetThreads {\n    getThreads\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetThreadHistory($threadId: String!) {\n    getThreadHistory(threadId: $threadId) {\n      role\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetThreadHistory($threadId: String!) {\n    getThreadHistory(threadId: $threadId) {\n      role\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ClearHistory($userId: String!) {\n    clearHistory(userId: $userId)\n  }\n"): (typeof documents)["\n  mutation ClearHistory($userId: String!) {\n    clearHistory(userId: $userId)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;