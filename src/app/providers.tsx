'use client';

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client/react';

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/graphql';

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [apolloClient] = useState(() => 
    new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    })
  );

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
}
