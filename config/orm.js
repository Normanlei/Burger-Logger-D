// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll(table, cb) {
    var query = `Select * from ${table}`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(table, col_name, newBurger_name, cb) {
    var query = `Insert into ${table} (${col_name}) values ("${newBurger_name}")`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne(table, col_name, newStatus, id, cb) {
    var query = `Update ${table} Set ${col_name} = ${newStatus} where id = ${id}`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne(table,id,cb) {
    var query = `delete from ${table} where id = ${id}`;
    connection.query(query,function(err,result){
      if(err) throw err;
      cb(result);
    })
  }
};
// Export the orm object for the model (cat.js).
module.exports = orm;
