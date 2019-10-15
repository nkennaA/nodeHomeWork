
var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
var url = req.url;
res.write('<h1>Hello World!<h1>'); 
if(url==='/about'){
    res.write(`<h1>about<h1>`);
    res.end();
}
else {
    res.end();
}
}).listen(8080, function(){
 console.log("server start at port 8080");
});