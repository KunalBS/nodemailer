const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport(
    {
        service : 'gmail',
        auth : {
            user: 'kunal.biswas@cbnits.com',
            pass: 'cbnits@1234'
        }
    }
)

//send out Mails

const mailOptions = {
    from: 'kunal.biswas@cbnits.com',
    to: 'karnojit550@gmail.com',
    subject: 'party !!!!!!!!!!!!!!!',
    text: 'but ekta jinis..aamke eta dye sob hobe na karon...amar to ta to req.body.emailto hobbe'
}

transport.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent', info.response)
    }
})