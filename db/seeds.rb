# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({ 
    username: "admin", 
    email: "admin@email.com", 
    password: "password"
})

product1 = Product.create({
    title: "watch 1",
    link: "20.00",
    description: "gkgjgjdhklcjdbcebcebobdbwoid",
    image_url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imEWfaVQvjA0/v0/1000x-1.jpg",
    user_id: 1
})

product1 = Product.create({
    title: "watch 2",
    link: "5.00",
    description: "gkgjgjdhklcjdbcebcebobdbwoidbbklbldn clk eln fl",
    image_url: "https://cdn.shopify.com/s/files/1/0256/2759/0703/products/Hdc9b561aecdf4f529dea1a5b8ab1fd880_620x.jpg?v=1580016314",
    user_id: 1
})
product1 = Product.create({
    title: "cap",
    link: "30.00",
    description: "gkgjgjdhklcjdbcebcebobdbwoikbkfblknknepnflkenfnqepfnd",
    image_url: "https://cdn11.bigcommerce.com/s-qhlg41l/products/5223/images/30347/wholesale-washed-cotton-plain-dad-hats-cheap-gjk004-all-colors__48851.1546530828.500.400.jpg?c=2",
    user_id: 1
})