//load bcrypt and dotenv
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
//load restaurant and user module
const Restaurant = require('../restaurant')
const User = require('../user')
const db = require('../../config/mongoose')
//load seeds
const restaurantList = require('./restaurant.json')
//seed users
const seedUser = [{
  email: 'user1@example.com',
  password: '12345678'
}, {
  email: 'user2@example.com',
  password: '12345678'
}]

db.once('open', () => {
  seedUser.forEach(seed => {
    bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(seed.password, salt))
      .then(hash => User.create({
        email: seed.email,
        password: hash
      }))
      .then(user => {
        const userId = user._id
        if(user.email === 'user1@example.com') {
          return Promise.all((Array.from(
            { length: 3 },
            (_, i) => Restaurant.create({ ...restaurantList.results[i], userId })
          )))
        }
        return Promise.all((Array.from(
          { length: 3 },
          (_, i) => Restaurant.create({ ...restaurantList.results[i + 3], userId })
        )))
      })
      .then(() => {
        console.log('done')
        process.exit()
      })
  })
})