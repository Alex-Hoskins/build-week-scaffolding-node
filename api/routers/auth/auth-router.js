const bcrypt = require('bcryptjs')
const { tokenBuilder } = require('./auth-helpers')
const router = require('express').Router()
const User= require('../users/user-model')
const { BCRYPT_ROUNDS } = require('../../../config')

router.post('/register', async (req, res, next) => {
    let user = req.body
    
    const hash = await bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash
  
    User.insertUser(user)
      .then(saved => {
        res.status(201).json({ message: `Great to have you, ${saved.username}` })
      })
      .catch(next)
  })

router.post('/login', (req, res, next) => {
    let { username, password } = req.body
  
    User.findByUsername( username )
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokenBuilder(user)
          res.status(200).json({
            message: `Welcome back, ${user.username}!`,
            token,
          })
        } else {
          next({ status: 401, message: 'Invalid Credentials' })
        }
      })
      .catch(next)
  })

module.exports=router