var db = require('./_db');
var SalesPerson = require('./salesPerson');
var Region = require('./region');


module.exports = {
	models: {
		SalesPerson: SalesPerson,
		Region: Region
	},

	syncAndSeed: function() {
		return db.sync({force: true})
		.then(function() {
			return Promise.all([
				SalesPerson.create({name: 'Will'}),
				Region.create({zip: 10005})
			]);
		});
	}
};
