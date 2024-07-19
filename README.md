 node-graphQL-integration
Sample node app to integration graphQL

Recommended extension to vscode: GraphQL by Orsen Kucher

To install depencencies and run server app

```
    npm install
    npm start
```

To build the react app and run client
```
    cd client/
    npm install
    npm start
```
Visit http://localhost:4000 to view apollo server.
Click on button "Query your server". It should launch https://studio.apollographql.com/sandbox/explorer

## Basic query to fetch names of all the user
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

## Query with variables. 
1. Get specific user details from user id
```
    query getUser($userId: ID!) {
      user(id: $userId) {
        name
        age
        nationality
        friends {
          name
        }
        username
      }
    }
```
Make sure you specify variables in variables section to make it work.
Example: 
    ```
    {
      "userId": 1
    }
    ```

## Mutation examples:
1. Create new user
```
    mutation createUser($user: CreateUserInput!) {
       createUser(user: $user) {
         id
         name
         age
       }
    }
```
Make sure you specify variables 
```
    "user": {
        "name": "Joseph",
        "age": 35,
        "username": "joseph35",
        "nationality": "GERMANY"
      }
  ````

2. Update existing user

```
    mutation updateUser($updateUserUsername: String!, $age: Int) {
       updateUser(username: $updateUserUsername, age: $age) {
         username
         age
         name
       }
    }
```
Make sure you specify variables 
```
    {
         "updateUserUsername": "kelly2019"
    }
```

3. Delete user
```
    mutation deleteUser($id: Int!) {
      deleteUser(id: $id) {
        id
      }
    }
```
Make sure you specify variables 
```
    {
         "updateUserUsername": "kelly2019"
    }
```

