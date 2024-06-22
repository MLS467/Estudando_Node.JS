// IMPORTANDO O EXPRESS - HANDLEBARS
const express = require('express');
const hbs = require('express-handlebars');

// CRIANDO OBJ APP 
const app = express();

// TEMPLATE DO HANDLEBARS
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');