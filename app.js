const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/404', (req, res)=>{
    res.send('Error página no encontrada');
});