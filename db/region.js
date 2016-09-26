var db = require('./_db');

var Region = db.define('region', {
	zip: {
		type: db.Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isNumeric: true,
			len: [5]
		}
	}
});

module.exports = Region;
