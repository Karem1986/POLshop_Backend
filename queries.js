const Order = require("./models").orders
const Product = require("./models").products
const OrderProduct = require("./models").orderproducts
const User = require("./models").user

//Get all orders 
// const getAllOrders = async () => {
//     const allmyorders = await Order.findAll();
//     const plainOrders = allmyorders.map(o => o.get({ plain: true }))
//     console.log(plainOrders)
// }

// getAllOrders()

//Find an order by id:
// async function getOrderById(key) {
//     const orderById = await Order.findByPk(key)
//     return orderById ? orderById.get({ plain: true }) : "Order not found"
// }
// getOrderById(1).then(orderId => console.log("This is order id:", orderId))

//Find an order by id including products 
//Order.findByPk(id, { include: Product })
const getOrderByIdWithProducts = async (key) => {
    const orderByIdWithProducts = await Order.findByPk(key, { include: [Product] });
    // const plainOrders = orderByIdWithProducts.map(o => o.get({ plain: true }));
    console.log(orderByIdWithProducts);
    return orderByIdWithProducts
};
//Test in terminal: node queries.js
getOrderByIdWithProducts(1).then(order => console.log("This is order:", order.toJSON()));
