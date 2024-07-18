const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!,
        friends: [User],
        nationality: Nationality,
        favioriteMovie: [Movie]
    }

    type Query {
        users: [User!]!,
        user(id: ID): User!,
        movies: [Movie!]!,
        movie(name: String!): Movie!
    }

    type Movie {
        id: ID!,
        name: String!,
        yearOfPublication: Int!,
        isInTheaters: Boolean!,
    }

    enum Nationality {
        CANADA,
        INDIA,
        BRAZIL,
        GERMANY,
        CHILE
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!,
        nationality: Nationality
    }

    type Mutation {
        createUser(user: CreateUserInput!): User!
        updateUser(username: String!, age: Int): User!
        deleteUser(id: Int!): User!
    }
`

module.exports = { typeDefs };