const express = require('express'); 
const bodyParser = require ('body-parser'); 
const cors = require ('cors'); 
const { request } = require('express');


const app = express();
const port = 40000;



app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit:'100MB'
}));
app.use(cors());
app.all('*', function(req,res,next){
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Methods','PUT,GET,PORT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Meaders','Content-Type');
    next(); 

});


//THE ACTUAL ENDPOINT
app.get('/',function(req,res){
    res.send ('My first steps in nodejs');
});

app.get('/Thecurrentdate',function(req,res){
    res.send ('2021-10-04');
});

app.get('/fullname',function(req,res){
    res.send ('Karla Leandro Hernández');
});

app.get('/city',function(req,res){
    res.send ('Juaréz');
});

app.get('/School',function(req,res){
    res.send ('Instituto Tecnológico de Nuevo León');
});

app.post('/SUM', function(req, res){
    let a = req.body.a;
    let b = req.body.b;
    let result = parseFloat(a) + parseFloat(b);
    res.send(result.toString())
});


app.post('/MULTIPLICATION3', function(req, res){
    let a = req.body.a;
    let b = req.body.b;
    let c = req.body.c;
    let result = parseFloat(a) * parseFloat(b) * parseFloat(c);
    res.send(result.toString())
});


app.post('/ASquare', function(req, res){
    let a = req.body.a;
    let result = parseFloat(a) * parseFloat(a);
    res.send(result.toString())
});


app.post('/ATriangle', function(req, res){
    let a = req.body.a;
    let b = req.body.b;
    let result = (parseFloat(a) * parseFloat(b))/2;
    res.send(result.toString())
});



app.listen(port,function (){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);

})
