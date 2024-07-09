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
`

module.exports = { typeDefs };
