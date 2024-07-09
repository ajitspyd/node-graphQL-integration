const { UserList, MovieList } = require("../userList");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
          },
    }
}

module.exports = { resolvers }
