var http = require('http')
var fs = require('fs')  //in-built file system read write module

http.createServer(function(req,res){
    fs.readFile('demoFile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data) //data in function(err, data)
        res.end()
    })
}).listen(8080)