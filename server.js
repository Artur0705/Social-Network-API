// Requiring packages needed for this app.
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

// Creating a connection

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
