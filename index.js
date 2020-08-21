require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
const cors = require("cors");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors,
  context: { models },
});

server
  .listen()
  .then(({ url }) => console.log("Server is running on localhost:4000"));
