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

module.exports=router