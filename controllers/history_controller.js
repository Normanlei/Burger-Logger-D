var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var history = require("../models/history");

router.get("/", function (req, res) {
    history.all(function (data) {
        var allBurger = {
            histories: data
        }
        res.render("index", allBurger);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (data) {
        res.status(200).end();
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body.newStatus, req.params.id, function (data) {
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id/:name", function (req, res) {
    history.create(req.params.name, function(data){
        res.status(200).end();
    });
    burger.delete(req.params.id, function (data) {
        res.status(200).end();
    });
});

module.exports = router;