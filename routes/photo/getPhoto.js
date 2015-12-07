/**
 * Created by Andrey on 06.12.2015.
 */
/**
 * Created by Andrey on 06.12.2015.
 */
var express = require('express');
var router = express.Router();
var Photo = require('../../models/Photo.js');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    Photo.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;