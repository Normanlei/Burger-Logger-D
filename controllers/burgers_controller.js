var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");
var history = require("../models/history");

router.get("/", function (req, res) {
    burger.all(function (burger) {
        history.all(function(history){
            var allBurger = {
                burgers: burger,
                histories: history
            }
            res.render("index", allBurger);
        });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (data) {
        history.delete(req.body.id,function(data1){
            res.status(200).end();
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body.newStatus, req.params.id, function (data) {
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id/:burger_name", function (req, res) {
    burger.delete(req.params.id, function (data1) {
        history.create(req.params.burger_name,function(data2){
            res.status(200).end();
        });
    });
});

module.exports = router;