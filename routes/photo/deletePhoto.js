/**
 * Created by Andrey on 06.12.2015.
 */
var express = require('express');
var router = express.Router();
var Photo = require('../../models/Photo.js');

/* GET home page. */
router.delete('/:id', function(req, res, next) {
    Photo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
