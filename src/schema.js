const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type User {
    id: Int!
    name: String!
    email: String!
    admin: Boolean
    password: String!
    orders: [Order]!
  }

  type Order {
    id: Int!
    date: Date!
    order: Product!
    user: User!
  }

  type Product {
    id: Int!
    name: String!
    imageUrl: String!
    review: [Review]
    price: Int!
  }

  type Category {
    id: Int!
    type: String!
  }
  type Messages {
    id: Int!
    email: String!
    replied: Boolean!
  }
  type Review {
    id: Int!
    title: String!
    comment: String!
  }

  type AuthPayload {
    name: String
    email: String!
    admin: Boolean
    password: String!
  }
  type Tokens {
    user: User
    token: String
    error: String
  }
  type Payment {
    client_secret: String
  }

  type Query {
    order(id: Int!): Order
    product(id: Int!): Product
    user(id: Int): User
    review(id: Int!): Review
    allOrders: [Order!]!
    allCategories: [Category]
    allMessages: [Messages]
    allUsers: [User]
    allProducts: [Product]
    arrayProducts(containsIds: [Int]): [Product]
    getUser(token: String): Tokens
    refreshUser(token: String): Tokens
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createOrder(name: String!, email: String!, password: String!): Order!
    createReview(
      title: String!
      comment: String!
      userId: Int!
      productId: Int!
    ): Review!
    signup(
      email: String!
      password: String!
      name: String!
      admin: Boolean
    ): AuthPayload
    login(name: String, email: String, password: String!): Tokens
    createpayment(amount: Int): Payment
    isLoggedIn(token: String): Boolean
  }
`;

module.exports = typeDefs;
