const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: "leilifaz39@gmail.com",
		pass: "Leila29change@pass",
	},
});

module.exports = { transporter };