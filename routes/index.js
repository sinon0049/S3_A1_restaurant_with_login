const express = require('express')
const router = express.Router()

//load home.js and restaurants.js
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')

//set routes
router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/users', users)

module.exports = router