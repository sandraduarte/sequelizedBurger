var express = require('express');
var app = express();
var routes = require('./controllers/burgers_controller.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');



// export sequelize connection from models
var models = require('./models');
var sequelizeConnection = models.sequelize;
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// a) sync the tables
.then(function(){
	return sequelizeConnection.sync({force:true});
})
.then(function() {
	return models.Burger.create( 
		{
			burger_name: "Classic Hamburger",
			devoured: false 
		}
	);
})
.then(function() {
	return models.Burger.create(
		{
			burger_name: "Cheeseburger",
			devoured: false 
		}
	);
})
.then(function() {
	return models.Burger.create(
		{
			burger_name: "Bacon Cheesburger Deluxe",
			devoured: false 
		}
	);
})
.then(function() {
	return models.Burger.create(
		{
			burger_name: "Vegan Burger",
			devoured: false 
		}
	);
})
.then(function() {
	return models.Burger.create(
		{
			burger_name: "Black Bean Burger",
			devoured: false 
		}
	);
})
.then(function() {
	return models.Burger.create(
		{
			burger_name: "Fried Egg Burger",
			devoured: false 
		}
	);
})

;






app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});
  