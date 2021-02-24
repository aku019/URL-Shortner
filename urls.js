// const  response  = require('express');
const express = require('express');
const shortid=require('shortid');

// const { response } = require('express');
const router=express.Router();
// const app = express();
const port = process.env.PORT || 3000;


urls={};
router.get('/',(req,res) => {
    const urlList =[];
    Object.keys(urls).forEach(urlId =>{
        urlList.push({id:urlId, long_url: urls[urlId].long_url});
    })
    res.send(urlList);

});

router.post('/',(req,res) => {
    const long_url= req.body.long_url;
    const id=shortid.generate();
    urls[id]=long_url;
    
       res.status(201).send({id});
   

    });

router.get('/:id',(req,res)=>{
    const {id}  = req.params;
    const long_url = urls[req.params.id];
    if (long_url) {
        res.status(200).send({
                     id:id,
                     long_url:long_url
                 }
                 );;
    } else {
        res.status(404).send('url shortener id not found');
    }


// const id=req.params.id;
// const long_url=urls[id];
// console.log(long_url);
// // const response={
// //     id:id,
// //     long_url:long_url
// // }

// if(long_url){
//     res.send({
//         id:id,
//         long_url:long_url
//     }
//     );
// }
// else{
//     res.status('404').send("invalid id");
// }
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
