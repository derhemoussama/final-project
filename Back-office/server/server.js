// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// require("dotenv").config();

// const cors = require("cors")

// const router = require("./Routes/productRoute");
// const userrouter = require("./Routes/userRoute");
// const customerRouter = require("./Routes/authRoute");
// const userloginRouter = require("./Routes/authloginUserRoute");
// const categorieRouter = require("./Routes/categoryRoute");
// const reviewsRouter = require("./Routes/reviewRoutes");
// const ordersRouter = require("./Routes/orderRoute");
// const paymentRouter = require("./Routes/paymentRoute")
// app.use("/uploads", express.static("uploads"));

// const port = 2500;

// require("./DB/ConnectDB");

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin:'http://localhost:5173',
//   credentials:true,
// }))

// app.use("/products", router);
// app.use("/users", userrouter);
// app.use("/customers", customerRouter);
// app.use("/api", userloginRouter);
// app.use("/categories", categorieRouter);
// app.use("/reviews", reviewsRouter);
// app.use("/orders", ordersRouter);
// app.use("/payment",paymentRouter)


// app.listen(port, () => {
//   console.log(`server is runing at http://localhost:${port}`);
// });
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

const cors = require("cors")

const router = require("./Routes/productRoute");
const userrouter = require("./Routes/userRoute");
const customerauthRouter = require("./Routes/authRoute");
const userloginRouter = require("./Routes/authloginUserRoute");
const categorieRouter = require("./Routes/categoryRoute");
const reviewsRouter = require("./Routes/reviewRoutes");
const ordersRouter = require("./Routes/orderRoute");
const paymentRouter = require("./Routes/paymentRoute")
const customerRouter = require("./Routes/customerRoute")

app.use("/uploads", express.static("uploads"));

const port = 2500;

require("./DB/ConnectDB");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true,
}))

app.use("/products", router);
app.use("/users", userrouter);
app.use("/customers", customerauthRouter);
app.use("/api", userloginRouter);
app.use("/categories", categorieRouter);
app.use("/reviews", reviewsRouter);
app.use("/orders", ordersRouter);
app.use("/payment", paymentRouter);
app.use("/customers", customerRouter);


app.listen(port, () => {
  console.log(`server is runing at http://localhost:${port}`);
});
 
 