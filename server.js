const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rasul.kainazarov@gmail.com',
        pass: '94gimnaziya'
    }
});
app.get('/', (req, res) => {
    res.send('meow')
})
app.post('/send', (req, res) => {
    console.log(req.body, req.params)
    transporter.sendMail({
        from: req.params.from,
        to: req.params.to,
        subject: req.params.subject,
        text: req.params.text
    }, (err, info) => {
        err ? console.log(err) : console.log('email sent')
    })
})

app.listen(3000, () => console.log('Listening on port'))
