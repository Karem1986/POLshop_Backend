require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
const PORT = process.env.PORT || 4001;


const server = new ApolloServer({
  cors: {
    origin: "*", // <- allow request from all domains
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: { models },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
