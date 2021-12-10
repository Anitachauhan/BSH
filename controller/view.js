var express = require("express"),
    router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    console.log("Root page hit!")
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/video',function(req,res){
    console.log("Second page hit!")
    res.sendFile(path.join(__dirname + '/../views/video.html'));
})

router.get('/iframe',function(req,res){
    console.log("third page hit!")
    res.sendFile(path.join(__dirname + '/../views/iframe.html'));
})

module.exports = router;