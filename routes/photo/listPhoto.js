/**
 * Created by Andrey on 06.12.2015.
 */
var express = require('express');
var router = express.Router();
var Photo = require('../../models/Photo.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    Photo.find(function (err, photos) {
        if (err) return next(err);
        res.json(photos);
    });
});

module.exports = router;

