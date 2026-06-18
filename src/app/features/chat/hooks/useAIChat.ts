import { useMutation } from '@apollo/client/react';
import { SendMessageDocument, SendMessageMutation, SendMessageMutationVariables } from '@/graphql/generated/graphql';
import { useThreads } from './useThreads';

export function useAIChat(userId: string = 'anonymous') {
  const [sendMessageMutation, { loading: isSending, error: sendError }] = useMutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >(SendMessageDocument);

  const {
    threads,
    currentThreadId,
    loading: threadsLoading,
    switchThread,
    createNewThread,
  } = useThreads(userId);

  const addMessage = async (prompt: string): Promise<string> => {
    const result = await sendMessageMutation({
      variables: { message: prompt, userId },
    });
    return result.data?.sendMessage || '';
  };

  return {
    addMessage,
    isThinking: isSending,
    error: sendError,
    threads,
    currentThreadId,
    threadsLoading,
    switchThread,
    createNewThread,
  };
}
