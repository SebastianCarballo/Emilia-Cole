const livereload = require("livereload");
const liveReloadServer = livereload.createServer();


const connectLivereload = require("connect-livereload");
const express = require('express');
const path = require('path');
const app = express();/* Funcion de alto nivel, sin esta funcion no funciona nada */
const port = 3000;

app.use(express.static(path.resolve(__dirname,'public')));

liveReloadServer.watch(path.join(__dirname,'public'));

app.use(connectLivereload());

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')));
app.get('/music',(req,res) => res.sendFile(path.join(__dirname,'views','music.html')));
app.get('*',(req,res) => res.sendFile(path.join(__dirname,'views','404.html')));

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


app.listen(port,() => console.log(`El servidor fue levantado con exito el dia lunes a las 9 de la mañana en http://localhost:${port}`));
