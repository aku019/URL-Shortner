// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// var birds = require('./birds');

// // ...

// app.use('/birds', birds);

// app.listen(port, () => {
//   console.log(`Server listening at port: ${port}`)
// });

const express = require('express');
const api = require('./api');
const { urls }= require('./urls_data.js');
const MongoStore = require('connect-mongo');
const db = require('./db');
require('dotenv').config();
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}).then(()=>{
  console.log("Connected to DB");
});
 const router=express.Router();
 
// const api= require('./api');
const app = express();
const port =process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// ...


app.use('/api',api);



app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});

app.get('/u/:id',(req,res)=>{
  console.log("hey hey");
  const response = urls[req.params.id];
//  const response = req.params.id;
  console.log(urls);
  console.log(req.params.id);
 if( response)
 {
   res.redirect(response);
 }
   else
   res.status(404).send();
 
});
