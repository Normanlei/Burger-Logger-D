// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create(newBurger_name, cb) {
        orm.insertOne("burgers", "burger_name", newBurger_name, function (res) {
            cb(res);
        });
    },

    update(newStatus, id, cb) {
        orm.updateOne("burgers", "devoured", newStatus, id, function (res) {
            cb(res);
        });
    },

    delete(id, cb) {
        orm.deleteOne("burgers", id, function (res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
