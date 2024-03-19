const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const { MONGO_URl, PORT } = process.env;
const authRoute = require("./Routes/AuthRoute");
const BrandRouter = require("./Routes/BrandRoute");
const CategoryRouter = require("./Routes/CategoryRoute");
const ProductRouter = require("./Routes/ProductRoute");
const CartRouter=require("./Routes/CartRoute")
const OrderRouter=require("./Routes/OrderRoute")
const AddressRouter=require("./Routes/AddressRoute")
const ProfileRouter=require('./Routes/ProfileRoute')
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"))
app.use("/", authRoute);
app.use("/brands", BrandRouter);
app.use("/category", CategoryRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter)
app.use('/order',OrderRouter)
app.use('/address',AddressRouter)
app.use('/profile',ProfileRouter)
mongoose
  .connect(MONGO_URl)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
