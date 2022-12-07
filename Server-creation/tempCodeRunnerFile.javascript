// server creation
// 1. http module
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
});
//port number, host, callback func
server.listen(3000, 'localhost',()=>{
    console.log('server is listening on port 3000');
});
//This will show that the server is listening on port 3000