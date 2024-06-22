const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
const port = process.env.PORT || 3000;
const serverName = '127.0.0.1';

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render(`${__dirname}/views/inicio.handlebars`, /*{ dados: false }*/);
});

app.get('/sobre', (req, res) => {
    res.render(`${__dirname}/views/sobre.handlebars`);
});

app.post('/teste', (req, res) => {
    const dados = {
        nome: req.body.nome,
        idade: req.body.idade,
        peso: req.body.peso
    }
    console.log(dados);
    res.redirect('/mostraDados');
});

app.get('/mostraDados', (req, res) => {
    const pessoa = [
        { nome: 'Maisson', idade: 28 },
        { nome: 'Luciane', idade: 31 },
        { nome: 'Manuelle', idade: 3 }
    ]
    res.render(`${__dirname}/views/mostraDados`, { pessoas: pessoa });
});


app.listen(port,
    () => console.log(`Servidor rodadando em http://${serverName}:${port}`)
)