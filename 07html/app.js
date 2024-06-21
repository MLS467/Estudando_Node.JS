const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(`${__dirname}/public`))

const server = app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/pagina.html`);
})

server.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));