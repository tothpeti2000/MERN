const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const router = require("./routes/routes");
const dbo = require("./db/conn");

app.use(router);

app.listen(PORT, () => {
  dbo.ConnectToServer();
  console.log(`Server running at http://localhost:${PORT}`);
});
