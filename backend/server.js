require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const docuRoutes = require("./routes/docus");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/docu", docuRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the db and listening to port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
