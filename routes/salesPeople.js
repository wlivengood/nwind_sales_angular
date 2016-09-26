var models = require('../db').models;
var SalesPerson = models.SalesPerson;

var router = require('express').Router();

module.exports = router;

router.get('/', function(req, res, next) {
	SalesPerson.findAll()
	.then(function(salesPeople) {
		res.send(salesPeople);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	SalesPerson.create({name: req.body.name})
	.then(function(salesPerson) {
		res.send(salesPerson);
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next) {
	SalesPerson.destroy({ where: { id: req.params.id } })
	.then(function() {
		res.sendStatus(200);
	})
	.catch(next);
});
