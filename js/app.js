const express = require('express')
const nodemailer = require('nodemailer')
const SMTPConnection = require('nodemailer/lib/smtp-connection')
const { getMaxListeners } = require('process')
const app = express()

const port = 3000

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(function(req, res, next){
  res.header("Access-Control_Allow-Origin", "*")
})




const user = "email@decontato.com"
const pass = 'senha'

app.get('/', (req, res) => res.send('Hello World'))

app.get('/send', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: smtp.hostgator.com,
    port: 587,
    auth: {user, pass}
  })

  transporter.sendMail({
    from: user,
    to: user,
    replyTo: userMail,
    subject: 'algo' ,
  })

})

app.listen(port, () => console.log(`Running on port ${port}!`))