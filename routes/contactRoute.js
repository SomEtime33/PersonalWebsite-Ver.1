const router = require('express').Router();
// const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer');



router.get('/', (req,res) => {
    res.send('contacted')
})



router.post('/', (req, res)=> {

    //smtp is a protocol for transporting messages 
    let smtpTransport = nodemailer.createTransport({

        service:'gmail',

        //the port of connect
        port:465,

        //for authenticate
        auth:{
            user:'hansomcho@gmail.com', 
            pass:'2017Hansom!'
        }
    })

});


let mailOption = {
    from: data.email,
    to:'hansomcho@gmail.com',
    subject: 'Message from ${data.name}'
}

module.exports = router;

