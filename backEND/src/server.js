const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');


//Initialize the app
const app = express();


//Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
    }));

app.set('view engine', '.hbs'); 

//Middleware
app.use(express.urlencoded({extended: false}));
//global variables

//Routes
app.use('/', require('./routes/index.routes'));
//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;