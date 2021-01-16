const express = require('express')
const User = require('../../models/user')
const router = express.Router()
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}))

router.post('/register', (req, res) => {
    const { email, password, confirmPassword } = req.body
    const name = req.body.name.trim()
    const errors = []
    if(password !== confirmPassword) {
        errors.push({ message: '密碼與確認密碼不相符!' })
    }
    User.findOne({ email }).then(user => {
        if(user) {
            errors.push({ message: '這個email已經註冊過了!' })
        }
        if(errors.length) {
            res.render('register', { name, email, password, confirmPassword, errors})
        } else {
            return User.create({ name, email, password })
            .then(() => {
                req.flash('success_msg', '你已成功註冊。')
                res.redirect('/users/login')
            })
            .catch(err => console.log(err))
        }
    })
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', '你已成功登出。')
    res.redirect('/users/login')
})

module.exports = router