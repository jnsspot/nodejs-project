const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.listen(4000,()=>{
    console.log('server running on http://localhost:4000');

});