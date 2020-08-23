require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
// const cors = require("cors");

//express was used to test cors working with apollo server but the correct way is to use it as in server below:
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

server
  .listen()
  .then(({ url }) => console.log("Server is running on localhost:4000"));
