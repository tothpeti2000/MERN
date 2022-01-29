const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  age: Number,
  position: string,
});

module.exports = mongoose.model("Employee", EmployeeSchema);
