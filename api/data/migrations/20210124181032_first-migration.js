exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('email', 200).notNullable()
    })
    .createTable('items', (table) => {
      table.increments('item_id')
      table.string('item_name', 200).notNullable()
      table.string('item_description', 200)
      table.string('item_image', 400)
    })
    .createTable('category', (table) => {
      table.increments('category_id')
      table.string('category_name', 200).notNullable()
    })
    .createTable('user_item', table => {
      table.increments('user_item_id')
      table.integer('item_id')
          .unsigned()
          .notNullable()
          .references('item_id')
          .inTable('items')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
    })
    .createTable('item_category', table => {
      table.increments('item_category_id')
      table.integer('item_id')
          .unsigned()
          .notNullable()
          .references('item_id')
          .inTable('items')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      table.integer('category_id')
          .unsigned()
          .notNullable()
          .references('category_id')
          .inTable('category')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
    })

}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('item_category')
  .dropTableIfExists('user_item')
  .dropTableIfExists('category')
  .dropTableIfExists('items')
  .dropTableIfExists('users')
}
