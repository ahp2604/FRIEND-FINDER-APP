var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 6600;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function(){
    console.log(`App is on PORT: ${PORT}`);
});