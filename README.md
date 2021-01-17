# Restaurant list

This is a restaurant list which you can use login feature to have your owb restaurant list.

## Features
First, create an account with
  + your name(optional)
  + your email
  + and a pasword 

or just use Facebook login.
  
Then, you can create ant restaurant you want with some informations of the restaurant.
  
Click the restaurants, and you can see...
  + Food categories
  + Addresses
  + Phone numbers
  + Introductions
  + Photos
  
Besides the details above, you can also...
  + Delete what you do not like at any time
  + Use "排序(sort)" to sort rstaurants by the order you want

## Download, install and run
+ Use Terminal to download the repository
```
git clone https://github.com/sinon0049/S3_A1_restaurant_with_login.git
```
+ Download MongoDB and create a database called "restaurant-list"
+ Download some necessary middlewares in the folder ```S3_A1_restaurant_with_login```
```
npm i bcryptjs
npm i body-parser
npm i connect-flash
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i method-override
npm i mongoose
npm i passport
npm i passport-facebook
npm i passport-local
```
+ Use npm command to add seed data
```
npm run seed
```
or you can run the project directly
```
npm run dev
```
If succeeded, Terminal will show 
```
Restaurant list is running on http://localhost:3000
mongodb connected!
```
, and you can use it on your browser with the address http://localhost:3000/

## Environments and utilities
+ Node.js v10.15.0
+ Express 4.17.1
+ Handlebars 5.2.0
+ bootstrap 4.2.1
+ jquery 3.3.1
+ Font Awesome
+ MongoDB
+ Mongoose 5.11.12
+ Method-override 3.0.0
+ bcrypt.js 2.4.3
+ body-parser 1.19.0
+ connect-flash 0.1.1
+ dotenv 8.2.0
+ Passport 0.4.1