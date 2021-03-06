const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).send({ "error": "Sem token!" });
	}

	const parts = authHeader.split(' ');

	if (!parts.length === 2) {
		return res.status(401).send({ "error": "Erro no token!" });
	}

	const [schema, token] = parts;

	if (!/^Bearer/.test(schema)) {
		return res.status(401).send({ "error": "Token mal formatado!" });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).send({ "error": "Token invalido!" });
		}

		req.userId = decoded.id;

		return next();
	})

};