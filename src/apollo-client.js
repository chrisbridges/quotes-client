// src/apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Set up the HTTP link to point to your GraphQL server
const httpLink = createHttpLink({
  uri: "YOUR_GRAPHQL_SERVER_URI", // Replace this with your GraphQL server URI
});

// Instantiate ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
