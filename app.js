require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const sessionRoutes = require("./routes/session");
const communityRoutes=require("./routes/community");
// const standardRoutes = require("./routes/standard");
// const studentRoutes = require("./routes/student");
// const teacherRoutes = require("./routes/teacher");
// const paymentStripe = require("./routes/paymentStripe");


//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("DB CONNECTED");
    },
    (err) => {
      console.log(`ERROR: ${err}`);
    }
  );

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.get("/", (req, res) => {
  return res.json("Hello World");
});




app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", communityRoutes);
app.use("/api", sessionRoutes);

// app.use("/api", standardRoutes);
// app.use("/api", teacherRoutes);
// app.use("/api", studentRoutes);
// app.use("/api", paymentStripe);



//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
