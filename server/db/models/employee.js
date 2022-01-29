const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  age: Number,
  position: String,
});

module.exports = mongoose.model("Employee", EmployeeSchema);
