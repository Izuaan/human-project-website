const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "IzuaanAMDT@gmail.com",
        pass: "Izuaan1234567"
    }
});

let mailer = {
    sendMail : function(mailOptions) {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent successfully : " + info.response);
            }
        });
    }
};

module.exports = mailer;