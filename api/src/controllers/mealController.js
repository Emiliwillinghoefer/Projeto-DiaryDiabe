const meal = require('../models/meal');

exports.get = async function (req, res) {
	res.send({ message: 'ok' })
}