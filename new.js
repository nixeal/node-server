const express= require('express');

const app = use('express');

app.get("/", (req, res)=>{
  res.send("Working");
});
app.get('/home',(req, res)=>{
  res.send("i'm on the home page");
});

app.get("/product",(req,res)=>{
  res.send(console.log(json({"message":"ok"})));
});

app.get("/contact",(req, res)=>{
  res.send(console.log(json({"yes":"yes"})));
});

app.get("/about",(request, response)=>{
  response.send("'m on the about page");
});

const PORT = 8000;

app.listen(PORT,()=>{
  if(error){
    console.log("error while starting the server");
  }else{
    console.log("server is working on the port : "+PORT);
  };
});