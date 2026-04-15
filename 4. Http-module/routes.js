const http = require('http');

const  server = http.createServer((req , res)=>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200 , { "content-Type" : "plain-text"});
            res.end("homepage");    
        
    }else if( url == '/projects'){
        res.writeHead(200 , { "content-Type" : "plain-text"});
            res.end("Projects"); 
    }else{
        res.writeHead(404 , { "content-Type" : "plain-text"});
            res.end("Page  not found"); 
    }
 

})

const port = 3000;
server.listen(port , () =>{
    console.log( `Server is listening the ${port}`);
    
});