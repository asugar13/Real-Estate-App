var models = require('../models/house_model');

exports.DisplayHouses = function(req, res) {
  var query = models.House.find({});
  query.exec(function(err, houses) {
    if (err) throw err;
    console.log(houses);
    res.send(houses);
  })
}
