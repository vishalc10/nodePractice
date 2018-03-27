var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    
    fs.readFile('demoFile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data) //data in function(err, data)
        res.end()
    })
    fs.appendFile('demoFile1.html', 'Hello Content!', function(err){
        if(err) throw err
        console.log('Saved!')
    })
}).listen(8080)