var express =require ('express');
var server= express();
var path=require("path");
const PORT=3000;

const LIST=[{content:"Go to work", done:true},{content:"Buy food", done:true}, {content:"Go to Sleep", done:true},{content:"Go to Fitness", done:false}];

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