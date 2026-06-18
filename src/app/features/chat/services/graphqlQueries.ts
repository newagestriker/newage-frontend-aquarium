import { gql, useMutation, useApolloClient } from '@apollo/client';
import { SendMessageDocument, SendMessageMutation, SendMessageMutationVariables } from '@/graphql/generated/graphql';

export { SendMessageDocument };

export function useSendMessage() {
  const [sendMessageMutation, { loading, error }] = useMutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >(SendMessageDocument);

  return {
    sendMessage: sendMessageMutation,
    loading,
    error,
  };
}


