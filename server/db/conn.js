const { MongoClient } = require("mongodb");
const DB_URI = process.env.DB_URI;

const client = new MongoClient(DB_URI);

let DB;

const ConnectToServer = (callback) => {
  client.connect((error, db) => {
    if (db) {
      DB = db.db("MERN");
      console.log("Successfully connected to MongoDB");
    }

    return callback(error);
  });
};

const GetDB = () => {
  return DB;
};

export default { ConnectToServer, GetDB };
