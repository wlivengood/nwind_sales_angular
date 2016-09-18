var models = require('../db').models;
var Region = models.Region;

var router = require('express').Router();

module.exports = router;

router.get('/', function(req, res, next) {
	Region.findAll()
	.then(function(regions) {
		res.send(regions);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	Region.create({zip: req.body.zip})
	.then(function(newRegion) {
		res.send(newRegion);
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next) {
	Region.destroy({ where: { id: req.params.id } })
	.then(function() {
		res.sendStatus(200);
	})
	.catch(next);
});