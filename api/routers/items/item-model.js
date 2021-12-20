const db = require('../../data/db-config')

async function getItems() { 
    const rows = await db('items') 
    return rows
}

async function getItemById(item_id) { 
    const [rows] = await db('items')
        .where('item_id', item_id) 
    return rows
}

async function addItem(item,user_id) {
    const [newItem] = await db('items').insert(item,['item_id', 'item_name', 'item_description', 'item_image']);
    const userItem = {
      'user_id':user_id, 
      'item_id': newItem.item_id}
    const rows = await db('user_item').insert(userItem)
    return newItem
}

async function updateItem(item_id, item) {
    const [updatedItem] = await db('items')
        .update(item,['item_id', 'item_name', 'item_description', 'item_image'])
        .where('item_id',item_id);
    return updatedItem
}

function deleteItem(item_id) {
    const numDeleted = db('items').where({ item_id }).del();
    return numDeleted
}

async function getItemsByUser(user_id) { 
    const rows = await db('user_item')
        .leftJoin('items', 'user_item.item_id', 'items.item_id')
        .where('user_item.user_id', user_id) 
    return rows
}

module.exports={
    getItems,
    getItemById,
    addItem,
    deleteItem,
    updateItem,
    getItemsByUser
}