if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

//Routes
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

//Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error, ' -end'))
db.once('open', () => console.log('Connected to Mongoose'))
db.on('close', () => console.log('Disconnected to Mongoose'))



// USe Routes
app.use('/', indexRouter)











app.listen(process.env.PORT || 4000)

