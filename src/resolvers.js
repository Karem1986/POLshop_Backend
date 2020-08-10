const resolvers = {
    Query: {
        async order(root, { id }, { models }) {
            return models.orders.findById(id)
        },
        async allOrders(root, args, { models }) {
            return models.orders.findAll()
        },
        async product(root, { id }, { models }) {
            return models.products.findById(id)
        },
        async allCategories(root, { id }, { models }) {
            return models.categories.findAll()
        },
        async allMessages(root, { id }, { models }) {
            return models.messages.findById()
        }
    },
}

module.exports = resolvers