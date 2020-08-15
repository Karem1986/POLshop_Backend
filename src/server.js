const { ApolloServer } = require("apollo-server-express");
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('../models')


const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: { models }
})

const app = express();
app.use(validateTokensMiddleware); // middleware to be built
apolloServer.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
    )
);