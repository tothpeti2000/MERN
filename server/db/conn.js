const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

let DB;

module.exports = {
  ConnectToServer: () => {
    mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB"));

    DB = mongoose.connection;
  },

  GetDB: () => {
    return DB;
  },
};
