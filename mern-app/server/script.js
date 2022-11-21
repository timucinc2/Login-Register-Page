const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected");
});

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRoute");
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server Running");
});
