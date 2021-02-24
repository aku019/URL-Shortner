// const  response  = require('express');
const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router=express.Router();
// const app = express();
const port = process.env.PORT || 3000;

users={};
router.get('/',(req,res) => {
    res.send([
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ])
});

router.post('/',(req,res) => {
    let user= req.body;
     let userId=user.id;//"workattech";//user.id;
    //  res.send('post');
   axios(`https://api.github.com/users/${userId}`)
   .then(
       response=> { 
          console.log(response.data);
           user = {
           ...response.data, 
           ...user
           
       }
       users[userId]=user;
       console.log(user);
       res.status(201).send({userId:userId});
    }
   )
  // axios(`https://api.github.com/users/${userId}`)
  //   .then( response=> {
  //     console.log(response.data);
  //   } )
    // users[userId]=user;
    //    res.status(201).send({userId:userId});

    });

router.get('/:userId',(req,res)=>{
const userId=req.params.userId;
const user=users[userId];

if(user){
    res.send(user);
}
else{
    res.status('400').send("Error:Not Found");
}
});

module.exports=router;

    
// var express = require('express');
// var router = express.Router();

// // middleware that is specific to this router
// // router.use(function timeLog (req, res, next) {
// //   console.log('Time: ', Date.now());
// //   next();
// // })
// // define the home page route
// router.get('/', function (req, res) {
//   res.send('userss home page2');
// })
// // define the about route
// router.get('/about', function (req, res) {
//   res.send('About users');
// })

// module.exports = router;
