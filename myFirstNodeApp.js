var http = require('http')  //http is in-built module
var dtm = require('./myFirstModule')    //myFirstModule is user defined module

//create server object
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})   //200 means that all is OK, the second argument is an object containing the response headers
    res.write('Hello World!')   //writes response to client
    res.write("The Date &  Time are:" + dtm.dateTime()) //write response to client (Date & Time) using user defined module
    res.end()   //end response
}).listen(8080) //the server object listens on port 8080