const { UserList, MovieList } = require("../userList");
const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
            return UserList;
          },
        user: (parent, args) => {
            const id = Number(args.id)
            // Select user from Database.
            const user = _.find(UserList, {id}) 

            return user 
        },
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, {name})
            return movie
        },
    },
    User: {
        favioriteMovie: (parent, args) => {
            const year = args.year
            const movie = _.filter(MovieList, (movie) => {
                return movie.yearOfPublication < 2010
            })

            return movie
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.user
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateUser: (parent, args) => {
            const username = args.username
            const updatedAge = args.age
            const userToUpdate = UserList.find((existingUser) => {
                return existingUser.username === username
            })


            userToUpdate.age = updatedAge
            return userToUpdate
        },
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    }
}

module.exports = { resolvers }