// const  response  = require('express');
const express = require('express');
const shortid=require('shortid');

// const { response } = require('express');
const router=express.Router();
// const app = express();
const port = process.env.PORT || 3000;


const { urls }= require('./urls_data.js');
const { ty }= require('./try.js');
const URL = require('./models/urls_db');

console.log("file");


router.get('/',(req,res) => {
    const urlList =[];
    // Object.keys(urls).forEach(id =>{
    //     // console.log(urls[id].long_url);
    //     urlList.push({id:id, long_url:urls[id]});
    // })
    // res.send(urlList);

    URL.find(  ).then(url => {
        console.log(url);

    //     url.forEach(()=> (item) {
    //            // If the item is null then the cursor is exhausted/empty and closed
    //              if(item == null) {
    //                 res.send(urlList); // you may not want to close the DB if you have more code....
    //                  return;
    //              }
    //              else
    //              {
    //                  urlList.push({id:item.id, long_url:item.urls});
    //              }

    url.forEach(function (item) {
        urlList.push({id:item.id, long_url:item.urls});
    });
    res.send(urlList);
       
               
      
    // });
});


    // var cursor = URL.find();
   
// Execute the each command, triggers for each document
// cursor.each(function(err, item) {
//     // If the item is null then the cursor is exhausted/empty and closed
//     if(item == null) {
//         URL.close(); // you may not want to close the DB if you have more code....
//         return;
//     }
//     else
//     {
//         urlList.push({id:item.id, long_url:item.urls});
//     }
// });

});

// router.get('/',(req,res) => {
//     const urlList =[];
//     Object.keys(urls).forEach(id =>{
//         // console.log(urls[id].long_url);
//         urlList.push({id:id, long_url:urls[id]});
//     })
//     res.send(urlList);

// });

router.post('/',async(req,res) => {
    // console.log("loop");
    // const long_url= req.body.long_url;
    // const id=shortid.generate();
    // urls[id]=long_url;
    
    // const url =  new URL({ id: id, url:long_url });
    //         url.save().then(() => {
    //             console.log("Saved");
    //             res.status(201).send({id});
    //         }).catch(()=>{
    //             res.status(500).send("F");
    //         });
    const long_url= req.body.long_url;
    const id=shortid.generate();
    const url =  new URL({ id: id, urls:long_url });
    console.log(url);
            try
            { 
               // console.log("woohoo");
               const x= await url.save();
               res.status(201).send({id});
            }
            catch{
                console.log("loop");
                res.status(400).send("F");

            }
           
        

    // const url =  URL.create({
    //     id:id,
    //     url:long_url 
    // });
    //   if(url)
       //res.status(201).send({id});
});

router.get('/:id',(req,res)=>{
    const {id}  = req.params;
    const {id2}  = req.params.id;
    const long_url = urls[req.params.id];
    console.log(id);
    // console.log(id2);
    var found=0;
    URL.findOne( {id:id} ).then(url => {
        console.log(url);
        if (url !=null) {
            found=1;
            console.log(url);
            res.status(200).json({id:id,
                long_url:url.urls});
           return;
               
        }
        else
        res.status(404).send('url shortener id not found from db');

    });
        
        
        

    
    
    // if (long_url) {
    //      res.status(200).send({
    //                   id:id,
    //                   long_url:long_url
    //               }
    //               );;
    //  } else {
    //      res.status(404).send('url shortener id not found');
    //  }

    
    



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




router.get('/try/:id',(req,res)=>{
    const {id}  = req.params;////+"$"+req.params.b;
    console.log(id);
  
   var found=0;
    ty.forEach(item =>{
     
        if(item.id==id)
       {
           found=1;
        res.status(200).send({
            id:id,
            item:item.c
        }
        );;
       }
    })
    if(found===0)
   res.status(404).send('id not found');
    

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
