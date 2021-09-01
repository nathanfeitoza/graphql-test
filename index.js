import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, graphql');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(8751, () => console.log('Running on server port localhost:8751/graphql'));