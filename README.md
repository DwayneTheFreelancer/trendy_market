# Trendy Market

​

## Description

Welcome to Trendy Market, an app that lets users sign up to an account, post new items that they purchased which will be featured as trending items. Users will also be able to add commments under each others post.
​

## MVP

​
1 ) A RESTful JSON API, which includes:

- At least three related models using Ruby on Rails:
- One user table and a pair of associated tables
- A server that will use Active Record to define models for interacting with the database
- The implementation of auth using bcrypt and json web token
- Generic controller actions (Index, Show, Create, Update, Delete) between the two non-user models
- Rails Router to organize our route endpoints
  ​
  ​
  2 ) A front-end that consumes the API, as well as:
- Permit the user to register, login, and send authenticated requests
- Permit the user to perform Create, Update, and Delete actions when logged in
- Layout and style front-end with clean & well-formatted CSS
- Use React Router for client side routing
  ​
  3 ) Must be deployed(Heroku/Surge)
  ​

## Post-MVP

​
1 ) Social Authentication

- Adding social Authentication so users can sign up and sign into their account with their social media or github
  ​
  2 ) Likes
- Product Likes Feature so users can like other users products
  ​

## Wireframe

​
![Wireframe Photo](https://i.imgur.com/IMMCvEU.png)
​

## Entity Realational Diagram (ERD)

​
![ER Diagram](https://i.imgur.com/O0wGUuz.png)
​
​

## Component Heirarchy

​

- < App.js />
  - < LandingPage />
  - < LogIn />
  - < Register />
  - < AllProducts />
  - < SpecificProduct />
  - < Comment />
    ​
    ​

## Server-side Routes

​
[TBU - Insert Rails Routes]
​

## Dependencies

​

- Axios
- React-Router-Dom
