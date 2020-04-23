const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
var cors = require('cors');
const knex = require('knex');
const register = require('./controlers/register');
const signin = require('./controlers/signin');
const profile = require('./controlers/profile');
const image = require('./controlers/image');

const db =knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'root',
    database : 'smart-brain'
  }
});

const app = express()


app.use(bodyParser.json());
app.use(cors());


app.get('/',  (req, res) => {
  res.send(database.users)
})


app.post('/signin', (req,res)=>{signin.handleSignin(req, res, db, bcrypt)}) 

app.post('/register',(req,res) => {register.handleRegister(req, res, db, bcrypt)} )  
	
app.get('/profile/:id',  (req, res) => {profile.handleProfile(req, res, db)} ) 

app.put('/image', (req, res) => {image.handleImage(req, res, db)} ) 
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res,)} ) 

app.listen(3001,()=>{

})