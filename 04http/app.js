const http = require('http');

http.createServer(function (req, res) {
    res.write("Aprendendo node.js com o Ralf");
    res.end();
}).listen(8080);