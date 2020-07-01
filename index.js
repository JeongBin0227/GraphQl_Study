import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { render } from "react-dom";

const uri = `http://52.78.116.231:8080/graphql`;

const fetchPoemList = async () => {
  const client = new ApolloClient({
    uri,
  });
  const {
    data: { todayWord },
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
  // console.log(todayWord);

  return todayWord;
};

const App = () => (
//   <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
//   </ApolloProvider>
);

render(<App />, document.getElementById("root"));

