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
//const { urls } = require('./urls_data');
// const router=express.Router();

// const api= require('./api');
const app = express();
const port =process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// ...


app.use('/api',api);



app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});