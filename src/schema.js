const { gql } = require('apollo-server')


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

    type Query {
        order(id: Int!): Order
        product(id: Int!): Product
        user(id: Int): User
        allOrders: [Order!]!
        allCategories: [Category]
        allMessages: [Messages]
        allUsers: [User]
        allProducts: [Product]
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createOrder(name: String!, email: String!, password: String!): Order!
    }
`

module.exports = typeDefs