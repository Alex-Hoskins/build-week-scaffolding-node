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

async function addItem(item) {
    const [newItem] = await db('items').insert(item,['item_id', 'item_name', 'item_description', 'item_image']);
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

module.exports={
    getItems,
    getItemById,
    addItem,
    deleteItem,
    updateItem
}