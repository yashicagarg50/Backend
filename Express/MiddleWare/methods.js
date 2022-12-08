const express=require('express');

const app=express();
//middleware func-->json
app.use(express.json());
app.listen(3000);

//get
 let users=[
   {
      id: 1,
      name: "Yashica",
   },
   {
      id: 2,
      name: "Vrinda",
   },
   {
      id: 3,
      name: "Annie",
   },
];
//mini app
const userRouter=express.Router();
const authRouter=express.Router();
app.use("/user",userRouter);
app.use("/auth",authRouter);
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);

userRouter.route("/:id").get(getUserById);

authRouter
.route("/signup")
.get(middleware,getSignUp)
.post(postSignUp);

//  app.get('/users',(req,res)=>{
//     res.send(users);
//  })

//  app.post('/users',(req,res)=>{
//     console.log(req.body);
//     res.json({
//         message:"data received successfully",
//         users:req.body
//     });
//  });

 //update ==> patch
//  app.patch('/users',(req,res)=>{
//     console.log('req.body-> ',req.body);
//     //update data in users obj
//     let dataToBeUpdated=req.body;
//     for(key in dataToBeUpdated)
//     {
//         user[key]=dataToBeUpdated[key];
//     }
//     res.json({
//         message:"data updated successfully"
//     });
//  });

//  //to delete a data
//  app.delete('/user',(req,res)=>{
//     users={};
//     res.json({
//         message:"data has been deleted"
//     });
//  });

 //params
//  app.get('/user/:id',(req,res)=>{

//     res.send("user id is ,req.params");
//     console.log(req.params.id);
//  })
function middleware(req,res,next){
   console.log('middleware encountered');
   next();
}

function getUser(req,res) {
   
   res.send(users);
};

function postUser(req,res) {
   console.log(req.body);
   users=req.body;
   res.json({
      message:"data received successfully",
      user:req.body
   });
};

function updateUser(req,res) {
   console.log('req.body-> ',req.body);

   let dataToBeUpdated=req.body;
   for(key in dataToBeUpdated){
users[key]=dataToBeUpdated[key];
   }
   res.json({
      message:"data updated successfully"
   });      
};

function deleteUser(req,res) {
   users={};
   res.json({
      message:"data has been deleted"
   });
};

function getUserById(req,res) {
   console.log(req.params.id);
   let paramId=req.params.id;
   let obj={};
   for(let i=0;i<users.length;i++)
   {
      if(users[i]['id']==paramId){
         obj=users[i];
      }
   }
   res.json({
      message:"req received",
      data:obj
   });
};

function getSignUp(req,res) {
   console.log('getSignUp called');
   res.sendFile('./public/index.html',{root:__dirname});

};

function postSignUp(req,res){
let obj=req.body;
console.log('backend',obj);
res.json({
   message:"user signed up",
   data:obj
});
}