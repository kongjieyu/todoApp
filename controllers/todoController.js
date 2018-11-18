//use body-parser as the middleware to handle post.
var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser, middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
    
app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res){
//handle the ajax request
//add the body data to data variable in line 4
    console.log(req.body);
    data.push(req.body);
    //send the data back as json
    res.json({todos: data});
});

app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
    return todo.item.replace(/ /g, "-") !== req.params.item; 
    });
    res.json(data);
});


};