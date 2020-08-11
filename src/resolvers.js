
const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findById(id)
        },
        async order(root, { id }, { models }) {
            return models.orders.findById(id)
        },
        async product(root, { id }, { models }) {
            return models.products.findById(id)
        },
        async allProducts(root, args, { models }) {
            return models.products.findAll()
        },
        async allOrders(root, args, { models }) {
            return models.orders.findAll()
        },
        async allCategories(root, args, { models }) {
            return models.categories.findAll()
        },
        async allMessages(root, args, { models }) {
            return models.messages.findAll()
        },
        async allUsers(root, args, { models }) {
            console.log('user')
            //is the naming the issue? 
            console.log('models user testing', models)
            return models.user.findAll()

        }
    },
    //Mutations below for creating a new user and a new order:
    Mutation: {
        async createUser(root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                admin,
                password: await bcrypt.hash(password, 10)
            })
        },
        async createOrder(root, { userId }, { models }) {
            return models.Order.create({ userId, productId })
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