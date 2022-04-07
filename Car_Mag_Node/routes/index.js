let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/database");
let Schema = mongoose.Schema;

let carSchema = new Schema(
  {
    Car: String
  },
  { collection: "Car" }
);
let CarModel = mongoose.model("carInfo", carSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});


router.post("/getCar", function (req, res, next) {
  CarModel.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("/getCar: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
