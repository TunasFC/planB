const express = require('express');
const path = require('path');



//Initialize the app
const app = express();


//Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.urlencoded({extended: false}));
//global variables

//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;