
const http = require("http");

const server = http.createServer(function(req, res){

    if(req.url === '/getSecretData'){
        res.end("Noting secret is Available ");
    }
    res.end("Hello World! ");

});


server.listen(7000,()=>{
    console.log("Listening on port: ",7000);
});