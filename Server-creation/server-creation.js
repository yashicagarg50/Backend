// server creation
// 1. http module
const http=require('http');
const fs=require('fs'); //This is use to read a file which is in different folder 
const server=http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
    //req console krne par this prints a huge data 
    console.log(req.method);
    console.log(req.url);//To open this particular page we use this
    //earlier we haven't written this neeche wala line and on running this caused time out error because no response was sent by us.
    
    //res method:
    
    // res.setHeader('Content-Type','text/plain');
    // res.write('Hello, Pepcoders ! :) ');
    // res.end();
    
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello, Pepcoders ! :) </h1>');
    // res.write('<h2>How you doin ? :) </h2>');
    // res.end();
//     fs.readFile('index.html',(err,fileData)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
            
//             // res.write(fileData);
//             //res.end();

//             //fileData is the name we have given to the text or the html file
            
//             //now if u add any route like in url of ur webpage u type after localhoat:3000/About Us, it will still show this page any route u type it will still show this html page.But we dont want this
            
//             res.end(fileData);
//         }
//     })

//     //We have types single single msgs which we want to be shown on the page but if we want the whole page to be shown then this would be really tiring.
//     //You have to type node (file name).js on terminal and run it
 
//     //On doing this when we check on inspect and check the network tab then we can find all the requests made and its' deets that includes the date it was sent or was it successful or not? We can check request header as well as response header.Our requestMethod is : GET
// });
    
    let path='./views';
    switch(req.url){
        case'/':
            path+='/index.html'
            break;
        case '/About.html':
            path+='/About.html'
            break;
        default:
            path+='/404.html'
            break;
    };
    
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(fileData);
        }
    })

    //We have types single single msgs which we want to be shown on the page but if we want the whole page to be shown then this would be really tiring.
    //You have to type node (file name).js on terminal and run it
 
    //On doing this when we check on inspect and check the network tab then we can find all the requests made and its' deets that includes the date it was sent or was it successful or not? We can check request header as well as response header.Our requestMethod is : GET
});
//port number, host, callback func
server.listen(3000, 'localhost',()=>{
    console.log('server is listening on port 3000');
});
//This will show that the server is listening on port 3000
//this command is still running listening to our request 
// to exit and stop the server we have to ctrl+c