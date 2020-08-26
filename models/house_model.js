var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

/**
 * Note that the database was loaded with data from a JSON file into a
 * collection called gillers.
 */
var HouseSchema = new Schema(
    {
        borough: {
            type: String, required: true
        },
        square_meters: {
            type: Number, required: true
        },
        bedrooms: {
            type: Number, required: true
        },
        toilets: {
            type: Number, default: 0
        },
        description: {
          type: String, required: false
        }
    },
    {
        collection: 'houses'
    }
);

// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/housesdb', {useNewUrlParser: true});

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
House = mongoose.model('House', HouseSchema);

module.exports = {
    House: House,
  };
