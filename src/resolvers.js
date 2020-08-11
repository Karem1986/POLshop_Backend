
const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.users.findById(id)
        },
        async order(root, { id }, { models }) {
            return models.orders.findById(id)
        },
        async product(root, { id }, { models }) {
            return models.products.findById(id)
        },
        async allOrders(root, args, { models }) {
            return models.orders.findAll()
        },
        async allCategories(root, args, { models }) {
            return models.categories.findAll()
        },
        async allMessages(root, args, { models }) {
            return models.messages.findByAll()
        },
        async allUsers(root, args, { models }) {
            return models.users.findByAll()
        }
    },
    //Mutations below for creating a new user and a new order:
    Mutation: {
        async createUser(root, { name, email, password }, { models }) {
            return models.users.create({
                name,
                email,
                admin,
                password: await bcrypt.hash(password, 10)
            })
        },
        async createOrder(root, { userId }, { models }) {
            return models.orders.create({ userId, productId })
        }
    },


    User: {
        async orders(user) {
            return user.getOrders()
        }
    },
    Order: {
        async user(product) {
            return product.getProducts()
        }
    }


}

module.exports = resolvers