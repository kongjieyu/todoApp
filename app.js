//'express' is the module name inside the node_modules file, this line of code help us access to that module, get all the functionality express have
var express = require('express');

var todoController = require('./controllers/todoController');

//use body-parser as the middleware to handle post.
var bodyParser = require('body-parser');

//fire the express function, variable app are able to access to the methods of express
var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser, middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//set ejs as view engine
//when we request some views or template, it will look for the view folder, so we need to creat a view folder.
app.set('view engine', 'ejs');

//middleware, whenever the link include assets, this middle is gonna fire.
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to the port
app.listen(3000);
console.log('you are listen to port 3000')

//HTTP Methods 
// -Get - app.get('route',fn) fn means function
// -Post - app.post('route',fn)
// -Delete -app.delete('route',fn)
// -Put
// (type of request)

