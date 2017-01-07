var express =require ('express');
var server= express();
var path=require("path");
const PORT=3000;

const LIST=[{content:"Go to work", done:true, id:1}, {content:"Go to Sleep", done:true, id:2},{content:"Go to Fitness", done:false, id:3}];

server.use(express.static(path.join(__dirname+"/dist")));

server.listen(PORT,()=>{
 console.log("Listining on port:"+PORT);
});

server.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
  res.header('Access-Control-Allow-Headers', "Content-Type");
  next();
})

server.get('/',(req,res)=>{
  res.sendfile("indexs.html");
});

server.get('/todolist',(req,res)=>{
  res.json(LIST);
});