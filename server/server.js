const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const routes = require("./routes/record");
const dbo = require("./db/conn");

app.use(routes);

app.listen(PORT, () => {
  dbo.ConnectToServer((error) => {
    if (error) {
      console.error(error);
    }
  });

  console.log(`Server running at http://localhost:${PORT}`);
});
