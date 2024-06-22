const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const nameServer = '127.0.0.1';

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    fetch('http://localhost:3000/clientes', { method: 'GET' })
        .then(resultado => resultado.json())
        .then(resultado => {
            res.render('inicio', { vet: resultado });
        })
});

app.post('/cadastrar', (req, res) => {
    const dados = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    console.log(dados)
    fetch('http://localhost:3000/clientes',
        {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res.redirect('/'))

})



app.listen(port, () => console.log(`Servidor rodando em http://${nameServer}:${port}`));