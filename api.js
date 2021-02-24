const express = require('express');
const urls = require('./urls');
const router=express.Router();
// router.use(express.json());
// router.use(express.urlencoded({extended:true}));
router.use('/urls',urls);



// router.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

module.exports=router;  