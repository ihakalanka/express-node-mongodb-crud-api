const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success.!");
})

const studentRouter = require('./routes/studentRoutes');

app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log("Server up and running on port:",PORT);
})
