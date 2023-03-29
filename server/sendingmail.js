const nodemailer=require("nodemailer");
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: "testingforacechar@gmail.com",
		pass: "Acetestpass123",
	},
});
const sendEmail=()=>{
const mailOptions = {
	from: "testingforacechar@gmail.com",
	to: "leila.faez@gmail.com",
	subject: "Welcome to our website",
	text: "Thank you for signing-up to ACE's newsletter.",
};
transporter.sendMail(mailOptions);
};
sendEmail();
