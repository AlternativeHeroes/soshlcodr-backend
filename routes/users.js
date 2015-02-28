var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.connect('mongodb://headgoon:alternativeheroes@ds049171.mongolab.com:49171/soshcodr');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}, function(err,result) {
        res.send(result);
    })
});

router.post('/', function(req, res, next) {
    var name = req.body.name;
    var lat = req.body.lat;
    var long = req.body.long;
    new User({ name: name, lat: lat, long: long }).save(function() {
        res.send("saved");
    });
});

module.exports = router;
