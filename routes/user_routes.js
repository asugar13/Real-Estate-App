var models = require('../models/house_model');

exports.DisplayHouses = function(req, res) {
  var query = models.House.find({});

  query.exec(function(err, houses) {
    if (err) throw err;
    console.log(houses);
    res.send(houses);
  })
}

exports.AddHouse = function(req, res) {
  var json = JSON.parse(Object.keys(req.body)[0]);
  var new_house = House({borough: json.borough, description: json.description,
  bedrooms: json.bedrooms, toilets: json.toilets, square_meters: json.square_meters});
  new_house.save(function(err, house){
    if (err) return console.error(err);
    return res.send("success");
  });
}
