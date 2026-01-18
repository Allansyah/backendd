require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

app.use(
  "/assets/images",
  express.static(path.join(__dirname, "public/images"))
);

const conn = require("./routes/conn");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use("/", conn);
app.use("/", userRoute);
app.use("/", authRoute);

app.get("/", (_req, res) => {
  res.json({
    res: "ok",
    message: "Welcome to my API",
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
