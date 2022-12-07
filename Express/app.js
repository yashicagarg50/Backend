const express=require('express');

const app=express();

app.listen(3000);

app.get('/',(req, res)=>{
    res.send('<h1>Hello World</h1>');
  });

//   app.get('/About',(req, res)=>{
//     res.send('About Us');
//   });

//   app.get('/Contact',(req, res)=>{
//     res.send('Contact Us');
//   });

//This was for sending the text one by one if we want to show complete html file then

app.get('/About',(req, res)=>{
res.sendFile('./views/About.html',{root:__dirname});
   });

  

   //redirects

app.get('/About-us',(req,res)=>{
    res.redirect('/About');
   });

    //404 page
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
   });

