const router= require('express').Router()
const Item = require('./item-model')

router.get('/', (req, res, next)=>{
    Item.getItems()
    .then(items=>{
        res.status(200).json(items)
    })
    .catch(next)
})
router.get('/:item_id', (req, res, next)=>{
    Item.getItemById(req.params.item_id)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(next)
})

router.post('/', (req, res, next)=>{
    Item.addItem(req.body)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(next)
})

router.put('/:item_id', (req, res, next)=>{
    Item.updateItem(req.params.item_id, req.body)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(next)
})

router.delete('/:item_id', (req, res, next)=>{
    Item.deleteItem(req.params.item_id)
    .then(numDeleted=>{
        res.status(200).json(numDeleted)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage:'something went wrong inside the item router',
        message:err.message
    })
})

module.exports=router