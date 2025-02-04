const router= require('express').Router()
const User = require('./user-model')

router.get('/', (req, res, next)=>{
    User.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(next)
})

router.post('/', async (req, res) => {
    res.status(201).json(await insertUser(req.body))
  })


router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage:'something went wrong inside the user router',
        message:err.message
    })
})


module.exports=router