
const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        admin: Boolean 
        password: [Password!]!
      }

    type Order {
        id: Int!
        date: Date!
        order: Product!
    }

    type Product {
        id: Int!
        name: String!
        imageUrl: Text! 
       
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
        allOrders: [Order!]!
        product(id: Int!): Product
        allCategories: [Categories]
        allMessages: [Messages]
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createUser(
          userId: Int!
          name: String!
          email: String!
          password: String!
        ): User!
    }
    type Mutation {
        createOrder(name: String!, email: String!, password: String!): Order!
        createOrder(
          productId: Int!
          name: String!
          price: String!
        ): Order!
    }
`

module.exports = typeDefs