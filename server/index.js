const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const port = 3001;
const schema = require('./schema');

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(port, () => console.log(`🚀 Server Started at port ${port}!`));
