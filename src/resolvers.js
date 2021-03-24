const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models").user;
const order = require("../models").orders;
const review = require("../models").review;
const stripe = require("stripe")(process.env.SECRET_KEY);

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async order(root, { id }, { models }) {
      return models.orders.findByPk(id);
    },
    async product(root, { id }, { models }) {
      return models.products.findByPk(id);
    },
    async review(root, { id }, { models }) {
      return models.review.findByPk(id);
    },
    async arrayProducts(root, { containsIds }, { models }) {
      return models.products.findAll({
        where: {
          id: containsIds,
        },
      });
    },
    async allProducts(root, args, { models }) {
      return models.products.findAll();
    },
    async allOrders(root, args, { models }) {
      return models.orders.findAll();
    },
    async allCategories(root, args, { models }) {
      return models.categories.findAll();
    },
    async allMessages(root, args, { models }) {
      return models.messages.findAll();
    },
    async allUsers(root, args, { models }) {
      console.log("user");
      //is the naming the issue?
      console.log("models user testing", models);
      return models.user.findAll();
    },
    async getUser(root, { token }, { models }) {
      const userId = jwt.verify(token, "Cat");
      const customer = await models.user.findByPk(userId.id);
      if (customer) {
        return { customer, token };
      } else if (!customer) {
        return { error: "token expired" };
      }
    },
  },
  //Mutations below for creating a new user, new order and a review
  Mutation: {
    async signup(root, { name, email, password, admin }, { models }) {
      const token = jwt.sign({ userId: user.id }, "Cat");
      return await models.user.create({
        name,
        email,
        token,
        admin,
        password: await bcrypt.hash(password, 10),
      });
    },
    async createOrder(root, { userId }, { models }) {
      return models.orders.create({ userId, productId });
    },
    async createReview(
      root,
      { userId, productId, title, comment },
      { models }
    ) {
      //checking if user is loggedIn to create a review validation here:

      return models.review.create({ userId, productId, title, comment });
    },
    async login(root, { email, password }, { models }) {
      if (!email || !password) {
        return {
          error: "Provide both email and password",
        };
      }

      console.log("email, password", email, password);
      try {
        const customer = await models.user.findOne({ where: { email } });

        if (!customer || !bcrypt.compareSync(password, customer.password)) {
          console.log("password do not match");
          return {
            error: "User with that email not found or password incorrect",
          };
        } else {
          const token = jwt.sign(
            { id: customer.id },
            "Cat",
            { expiresIn: "1h" }
        
          );
          console.log("token", token);
          return { user: { ...customer.dataValues }, token };
        }
      } catch (err) {
        return {
          error: err,
        };
      }
    },
    async createpayment(root, { amount }, { currency }, { metadata }) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "eur",
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: "accept_a_payment" },
      });
      console.log("paymentIntent", paymentIntent);
      return paymentIntent;
    },
    async isLoggedIn(root, { token }) {
      console.log("token", token);
      if (!token) {
        return false;
      }
      try {
        const decodedToken = jwt.verify(token, "Cat");
        console.log("decoded token", decodedToken);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },

  Product: {
    async review(product) {
      return product.getReviews();
    },
  },

  User: {
    async orders(user) {
      return user.getOrders();
    },
  },
  Order: {
    async user(product) {
      return product.getProducts();
    },
  },
};

module.exports = resolvers;
