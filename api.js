// const express = require('express');
// const router = express.Router();

// // declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';

// /* GET api listing. */
// router.get('/', (req, res) => {
//   res.send('api works');
// });

// router.use(function(req,res, next){
// console.log("for any route");
// next();

// }, function(req,res,next){
//   console.log("next in the statck");
//   next();


// });

// router.use('/posts',function(req,res,next){
//    console.log('Got request');
//    next();
// })

// // Get all posts
// router.get('/posts', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   // axios.get(`${API}/posts`)
//   //   .then(posts => {
//   //     res.status(200).json(posts.data);
//   //   })
//   //   .catch(error => {
//   //     res.status(500).send(error)
//   //   });
//   console.log("Got request from server for object");
// res.json({name:"Jawed", age:27});
// });

// module.exports = router;