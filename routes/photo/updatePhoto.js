/**
 * Created by Andrey on 06.12.2015.
 */
var express = require('express');
var router = express.Router();
var Photo = require('../../models/Photo.js');

router.put('/:id', function(req, res, next) {
console.log(req.params.id,req);
    Photo.findByIdAndUpdate(req.params.id, req.body.data, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;
