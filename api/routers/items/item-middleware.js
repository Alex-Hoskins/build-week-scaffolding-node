const Item = require('./item-model')




const checkReqBody = (req, res, next) => {
  if (!req.body.item_name) {
    return next({ status: 401, message: "name field is required" })
  }
  else{
      next()
  }
}
const checkItemExists = (req, res, next) => {
    Item.getItemById(req.params.item_id)
    .then(response=>{
        if(response)
        next()
        else{
            next({ status: 401, message: `item at item_id ${req.params.item_id} does not exist` })
        }
    })
    .catch(error=>{
        next(error)
    })
}


module.exports = {
  checkReqBody,
  checkItemExists
}