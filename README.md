# node-graphQL-integration
Sample node app to integration graphQL

Recommended extension to vscode: GraphQL by Orsen Kucher

To build the app run
```
    npm start
```
Visit http://localhost:4000 to view apollo server.
Click on button "Query your server". It should launch https://studio.apollographql.com/sandbox/explorer

try query to fetch names of all the user
```
    query ExampleQuery {
      users {
        name
        nationality
        username
        id
        age
      }
    }
```
