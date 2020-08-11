
const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        admin: Boolean 
        password: String!
        orders: [Orders]!
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
        product(id: Int!): Product
        user(id: Int): User
        allOrders: [Order!]!
        allCategories: [Categories]
        allMessages: [Messages]
        allUsers: [User]
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