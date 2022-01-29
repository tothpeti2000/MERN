const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");

// This helps to convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

router.route("/").get((req, res) => {
  res.send("Hello World!");
});

// Get all employees
router.route("/employees").get((req, res) => {
  const db = dbo.GetDB();

  db.collection("employees")
    .find({})
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      res.json(result);
    });
});

// Get an employee by ID
router.route("/employee/:id").get((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  db.collection("employees").findOne(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
});

// Add a new employee
router.route("/employees/add").post(function (req, res) {
  const db = dbo.GetDB();

  const employee = {
    name: req.body.name,
    age: req.body.age,
    position: req.body.position,
  };

  db.collection("employees").insertOne(employee, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
});

// Update an employee
router.route("/update/:id").post((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  const newValues = {
    $set: {
      name: req.body.name,
      age: req.body.age,
      position: req.body.position,
    },
  };

  db.collection("employees").updateOne(query, newValues, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
    console.log("1 document updated");
  });
});

// Delete an employee
router.route("/:id").delete((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  db.collection("employees").deleteOne(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
    console.log("1 document deleted");
  });
});

module.exports = router;
