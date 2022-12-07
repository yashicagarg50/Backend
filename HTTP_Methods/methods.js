const express=require("express");

const app=express();
//middleware func-->json
app.use(express.json());
app.listen(3000);

//get
 let users={};

 app.get('/users',(req,res)=>{
    res.send(users);
 })

 app.post('/users',(req,res)=>{
    console.log(req.body);
    res.json({
        message:"data received successfully",
        users:req.body
    });
 });

 //update ==> patch
 app.patch('/users',(req,res)=>{
    console.log('req.body-> ',req.body);
    //update data in users obj
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated)
    {
        user[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully"
    });
 });

 //to delete a data
 app.delete('/user',(req,res)=>{
    users={};
    res.json({
        message:"data has been deleted"
    });
 });

 //params
 app.get('/user/:id',(req,res)=>{

    res.send("user id is ,req.params");
    console.log(req.params.id);
 })