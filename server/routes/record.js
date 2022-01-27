const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/").get((req, res) => {
  res.send("Hello World!");
});

// This section will help you get a list of all the records.
recordRoutes.route("/records").get((req, res) => {
  const db = dbo.GetDB();

  db.collection("records")
    .find({})
    .toArray((error, result) => {
      if (error) {
        throw err;
      }

      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/records/:id").get((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  db.collection("records").findOne(query, (error, result) => {
    if (error) {
      throw err;
    }

    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/records/add").post(function (req, res) {
  const db = dbo.GetDB();

  const employee = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };

  db.collection("records").insertOne(employee, (error, result) => {
    if (error) {
      throw err;
    }

    res.json(result);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  const newValues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };

  db.collection("records").updateOne(query, newValues, (error, result) => {
    if (error) {
      throw err;
    }

    res.json(result);
    console.log("1 document updated");
  });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  const db = dbo.GetDB();
  const query = { _id: ObjectId(req.params.id) };

  db.collection("records").deleteOne(query, (error, result) => {
    if (error) {
      throw err;
    }

    res.json(result);
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;
