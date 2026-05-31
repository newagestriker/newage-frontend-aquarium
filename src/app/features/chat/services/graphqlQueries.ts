import { graphqlRequest } from './graphqlClient';

export const sendMessage = async (message: string, userId: string): Promise<string> => {
  const response = await graphqlRequest<{ sendMessage: string }>(
    `
      mutation SendMessage($message: String!, $userId: String!) {
        sendMessage(message: $message, userId: $userId)
      }
    `,
    { message, userId },
  );
  return response.sendMessage;
};


