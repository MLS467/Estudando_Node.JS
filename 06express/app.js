const express = require('express');
const app = express();

let server = app.get("/", (req, res) => {
    res.send("Olá Mundo Express");
    res.end();
})

server.listen(8080, () => console.log(`rodando em http://localhost:8080`));