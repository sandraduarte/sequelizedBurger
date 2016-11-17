var express = require('express');
var router = express.Router();
var Burger = require('../models/')["Burger"];

	router.get('/', function(req, res) {
		res.redirect('/burgers');
	});

	router.get('/burgers', function(req, res) {
		Burger.findAll()
		.then(function(data){
			res.render('index', {burgers: data});
		});
	});

	router.post('/burgers/insertOne', function(req, res) {
		Burger.create({burger_name: req.body.burger, devoured:false})
		.then(function() {
			res.redirect('/burgers');
		});
	});

	router.put('/burgers/updateOne/:id', function(req, res) {
		Burger.update({devoured:true},{where: { id: req.params.id}})
		.then(function(){
			res.redirect('/burgers');
		});
	});

	router.delete('/burgers/delete/:id', function (req, res) {
		Burger.destroy({where: { id: req.params.id}})
		.then(function(){
			res.redirect('/burgers');
		});
	});

module.exports = router;