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
    }
}

module.exports = { resolvers }
