const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

app.get('/', function (req, res) {
    fetch('http://localhost:3000/cursos')
        .then(resposta => resposta.json())
        .then(resposta => {

            res.render(`${__dirname}/views/inicio`, { vet: resposta });
        })
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});