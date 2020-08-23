require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
const PORT = process.env.PORT || 4000;
// const cors = require("cors");

//express was used to test cors working with apollo server but the correct way is to use it as inside server below:
// const express = require("express");

// const app = express();
// app.use(cors);

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
