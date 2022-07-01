import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vc5xcd1erw01uid45shzwl/master',
  cache: new InMemoryCache()
})