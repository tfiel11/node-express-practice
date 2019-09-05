const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index.js')

app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'node_practice'
})

db.connect()
db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
})
db.end()

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)

