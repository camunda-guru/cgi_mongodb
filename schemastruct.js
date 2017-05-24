var mongoose = require('mongoose');
Schema = mongoose.Schema;

var stateSchema = new mongoose.Schema(
{
  stateId:Number,
  stateName:String 

})

var citySchema=new mongoose.Schema(
{
  cityId:Number,
  cityName:String,
  stateRef:[{ type: Schema.Types.ObjectId, ref: 'StateModel' }]
 

}
);

module.exports.StateModel = mongoose.model('StateModel',stateSchema );    
module.exports.CityModel = mongoose.model('CityModel',citySchema );        





   