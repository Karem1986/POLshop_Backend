
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.user.findByPk(id)
        },
        async order(root, { id }, { models }) {
            return models.orders.findByPk(id)
        },
        async product(root, { id }, { models }) {
            return models.products.findByPk(id)
        },
        async review(root, { id }, { models }) {
            return models.review.findByPk(id)
        },
        async arrayProducts(root, { containsIds }, { models }) {
            return models.products.findAll({
                where: {
                    id: containsIds
                }
            })
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
    //Mutations below for creating a new user, new order and a review
    Mutation: {
        async signup(root, { name, email, password }, { models }) {
            const token = jwt.sign({ userId: user.id }, "testing")
            return models.user.create({
                name,
                email,
                admin,
                token,
                password: await bcrypt.hash(password, 10),

            })
        },
        async createOrder(root, { userId }, { models }) {
            return models.orders.create({ userId, productId })
        },
        async createReview(root, { userId, productId, title, comment }, { models }) {
            return models.review.create({ userId, productId, title, comment })
        },
        // async signup(root, { email, password, name }) {
        //     // 1
        //     const password = await bcrypt.hash(password, 10)

        //     // 2
        //     const user = await models.user.create({ data: { email, password, name } })

        //     // 3
        //     const token = jwt.sign({ userId: user.id }, "testing")

        //     // 4
        //     return {
        //         token,
        //         user,
        //     }
        // }


    },


    Product: {
        async review(product) {
            return product.getReviews()
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