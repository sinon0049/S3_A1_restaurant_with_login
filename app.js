//assign port and load required modules
const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//load restaurant.js
const Restaurant = require('./models/restaurant')
//load router
const routes = require('./routes')
//load mongoose
require('./config/mongoose')
//load passport
const usePassport = require('./config/passport')
//load connect-flash
const flash = require('connect-flash')

//set handlebars, body-parser and method-override
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
//set express-session
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true
}))
//set passport, connect-flash and routes
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.user = req.user
    res.locals.success_msg = req.flash('success_msg')
    res.locals.warning_msg = req.flash('warning_msg')
    next()
})
app.use(routes)

//listen server
app.listen(port , () => {
    console.log(`Restaurant list is running on http://localhost:${port}`)
})