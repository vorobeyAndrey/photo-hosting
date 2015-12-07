/**
 * Created by Andrey on 06.12.2015.
 */
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var uuid = require('node-uuid');
var fs = require("fs")
var path = require("path");

var util = require('util');
var winston = require('winston');
var logger = new winston.Logger();

var mongoose = require('mongoose');
var Photo = require('../../models/Photo.js');

/* GET home page. */


router.post('/', function(req, res) {

    var dir = './public/uploads';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        console.log(fields,files);
        var image = files.image[0];
        var title = fields.title;

        fs.readFile(image.path,function(err,data){
            var uuidImg = uuid.v1()+ path.extname(image.originalFilename);
            var pathImage = "./public/uploads/"+uuidImg;
            fs.writeFile(pathImage,data,function(error){
                console.log(image);
                if(error)console.log(error);
                Photo.create({"name":path.parse(image.originalFilename).name,image:uuidImg,note:title,
                    type:path.extname(image.originalFilename)},function (err,post){
                    if (err) return next(err);
                });
            })
        });
        res.redirect('/');
    });
});
module.exports = router;