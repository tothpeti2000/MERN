const { MongoClient } = require("mongodb");
const DB_URI = process.env.DB_URI;

const client = new MongoClient(DB_URI);

let DB;

module.exports = {
  ConnectToServer: (callback) => {
    client.connect((error, client) => {
      if (client) {
        DB = client.db("MERN");
        console.log("Successfully connected to MongoDB");
      }

      return callback(error);
    });
  },

  GetDB: () => {
    return DB;
  },
};
