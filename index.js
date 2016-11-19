var express = require('express');
var app =  express();
var http = require('http').server(app);
//Usando socket io
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); //  aqui serviran archivos staticos

var port =  process.env.PORT || 3000; //Establecer el puerto


app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');//Ruta redireccion a index
});


http.listen(port,function(){
	console.log('Escuchado en el puerto' + port);
});