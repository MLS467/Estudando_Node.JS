const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//  CONFIGURAR O BODYPARSER
app.use(bodyParser.json()); // USAR COMO JSON {"TESTE":"123"}
app.use(bodyParser.urlencoded({ extended: false })); // CONFIGURA PARA USAR O METHOD POST

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
}).listen(3000, () => console.log("Servidor rodando em http://localhost:" + port));

app.post('/receber', (req, res) => {
    const dados = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    console.log(dados);
    res.json(dados);
    res.end();
});
