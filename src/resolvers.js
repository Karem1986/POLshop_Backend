const resolvers = {
    Query: {
        async order(root, { id }, { models }) {
            return models.Order.findById(id)
        },
        async allOrders(root, args, { models }) {
            return models.Order.findAll()
        },
        async product(root, { id }, { models }) {
            return models.Product.findById(id)
        },
        async allCategories(root, { id }, { models }) {
            return models.Categories.findAll()
        },
        async allMessages(root, { id }, { models }) {
            return models.Recipe.findById(id)
        }
    },
}

module.exports = resolvers