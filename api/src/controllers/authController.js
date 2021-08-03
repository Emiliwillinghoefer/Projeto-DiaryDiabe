const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

function generateToken(params = {}) {
	return jwt.sign(params, process.env.secret, {
		expiresIn: 86400,
	});
}

exports.register = async function (req, res) {
	const { email } = req.body;
	try {
		if (await User.findOne({ email }))
			return res.status(400).send({ error: "Usuário já existe!" });

		const user = await User.create(req.body);

		return res.send({
			user,
			token: generateToken({ id: user.id }),
		});
	} catch (error) {
		console.log(error)
		return res.status(400).send({ error: "Falha ao se cadastrar" });
	}
}

exports.authenticate = async function (req, res) {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		return res.sendStatus(400).send({ error: "Usuário não encontrado!" });
	}

	if (!(await bcrypt.compare(password, user.password))) {
		return res.sendStatus(400).send({ error: "Senha incorreta" });
	}

	return res.send({
		user,
		token: generateToken({ id: user.id }),
	});
}