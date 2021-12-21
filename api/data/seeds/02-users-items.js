const users =[
    {username:'Harry', password:'Potter', email:'harrypotter@howarts.com'},
    {username:'Michael', password:'Scott', email:'datemike@hotmail.com'},
]
const items =[
    {item_name:'Butter beer', item_description:'A tasty buttery smooth beverage', item_image:'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
    {item_name:'Wand', item_description:'Made with a unicorn hair and powerful', item_image:'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
    {item_name:'broomstick', item_description:'Nimbus 2000', item_image:''},
    {item_name:'Hedwig', item_description:'Owl', item_image:'https://images.unsplash.com/photo-1555677284-6a6f971638e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {item_name:'mug', item_description:'Worlds Best Boss', item_image:'https://images.unsplash.com/photo-1552318415-cc99d956c134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'},
    {item_name:'grill', item_description:'George Foreman', item_image:'https://cdn-img.georgeforemangrills.com/manager/georgeforemangrills_com/ss20/large_GF_AW19_articles_N25800_9692_BOP.jpg'},
]
const category =[
    {category_name:'business'},
    {category_name:'grocery'},
    {category_name:'household'},
    {category_name:'recreation'},
]
const user_item=[
    {user_id:1,item_id:1,},
    {user_id:1,item_id:2,},
    {user_id:1,item_id:3,},
    {user_id:1,item_id:4,},
    {user_id:2,item_id:5,},
    {user_id:2,item_id:6,},
    
]

const item_category=[
    {item_id:1,category_id:2,},
    {item_id:2,category_id:1,},
    {item_id:3,category_id:4,},
    {item_id:4,category_id:3,},
    {item_id:5,category_id:1,},
    {item_id:6,category_id:3,},
]

exports.seed = async function(knex) {
 await knex('users').insert(users)
 await knex('items').insert(items)
 await knex('category').insert(category)
 await knex('user_item').insert(user_item)
 await knex('item_category').insert(item_category)
};