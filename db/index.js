const Sequelize = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL);

var SalesPerson = db.define('salesPerson', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

var Region = db.define('region', {
	zip: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isNumeric: true,
			len: [5]
		}
	}
});

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