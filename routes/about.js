var express = require('express');
var router = express.Router();

router.get('/aboutme', function(req, res){
    console.log('Navigated to the about me page')
   res.send('This is the about me page');
});


//export this router to use in our app.js
module.exports = router;