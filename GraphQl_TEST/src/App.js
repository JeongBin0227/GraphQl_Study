import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { gql } from "apollo-boost";
import { render } from "react-dom";

const uri = `http://52.78.116.231:8080/graphql`;

const fetchPoemList = async () => {
  const client = new ApolloClient({
    uri,
  });
  const {
    data: {
      todayWord: { word },
    },
  } = await client.query({
    query: gql`
      {
        todayWord {
          id
          word {
            id
            text
          }
        }
      }
    `,
  });
  console.log(word);

  return word;
};

const App = () => {
  //   <ApolloProvider client={client}>
  return <h2>My first Apollo app 🚀 </h2>;

  //   </ApolloProvider>
};

export default App;
