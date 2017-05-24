console.log("Testing scripting file.......");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:14000/bankdb');
var db = mongoose.connection;
db.once('open',function()
{
     console.log("connected.....");
});

var schema =new mongoose.Schema(
{
branchId:Number,
name:String,
address:String 

}); 

BranchModel = mongoose.model('branch',schema);
var branchData = new BranchModel({
  branchId: 34576,
  name: 'Tambaram',
 address: 'Chennai'  
});

branchData.save(function(err, customerdata) {
  if (err) return console.error(err);
  console.log("saving......");
});





BranchModel.find(function(err,res)
{
console.log("reaching...");
console.log(err);
  console.log(res);
})


