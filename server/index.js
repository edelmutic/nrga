const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const port = 3001;
const schema = require('./schema');
const users = [{ id: 1, username: 'Eva', age: 5 }];

const app = express();
app.use(cors());

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user.id == id);
  },
  createUser: ({ input }) => {
    const createUser = () => {
      const id = Date.now();
      return {
        id,
        ...input,
      };
    };
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(port, () => console.log(`🚀 Server Started at port ${port}!`));
