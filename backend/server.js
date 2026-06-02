const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Fitness Tracker Backend is running ");
});


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/workouts", require("./routes/workoutRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});