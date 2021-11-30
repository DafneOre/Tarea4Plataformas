
//Las librerias que estamos utilizando las ponemos en variables
var express= require("express")
var cors=require("cors")
var mysql = require('mysql');

//Define puerto
var port= 3000

//Crear variable para llamar expre dentro del express

var app=express("")
//definir tipo de lenguaje
app.use(express.json())

app.use(cors())

//Establecer los servicios , req es : 
//Metodo obetener pokemon
app.get('/pokemons',function(req, res){
    var connection = mysql.createConnection({
      Host: "localhost",
      user: 'utec',
      password: '1234567890',
      database : 'pokedex'
    });
    connection.connect();  
    var myQuery="SELECT id,imagen ,names, height, category, weights, abilities,types,weaknesses FROM pokemon;";
    connection.query(myQuery, function (error, results, fields) { 
      if (error) throw error;                   
      res.send(results);
      connection.end();
    });
});

//Obtener un solo pokemon por id, te devuelve un pokemon pero por eleccion, en funcion al id 
app.get('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();

    var myQueryComments="SELECT id,imagen ,names, height, category, weights, abilities,types,weaknesses FROM pokemon WHERE id = ?;";
    var myValues = [req.params.id];
    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results);
        connection.end();
    });
});

// Insertar, Agregar un pokemon
app.post('/pokemons', function(req, res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });   
   connection.connect();
   var myQuery="INSERT INTO pokemon(imagen ,names, height, category, weights, abilities,types,weaknesses)"+ 
                "VALUES (?, ?, ?, ?, ? , ?, ?, ?);";
   var myValues = [req.body.imagen, req.body.names, 
                    req.body.height, req.body.category, 
                    req.body.weights, req.body.abilities,
                    req.body.types,req.body.weaknesses];
                    
   connection.query(myQuery, myValues, function(error, results, fields){
       if (error) throw error;       
       res.send(results);
       connection.end();
   });
});

//Actualizar un pokemon 
app.put('/pokemons/:id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery =[ " UPDATE pokemon SET"];
    var myValues = [ ];
    if (req.body.names){
      myQuery += " names = ? ";
      myValues.push(req.body.names);
    }
    if (req.body.weaknesses){
        myQuery += " , weaknesses= ? ";
        myValues.push(req.body.weaknesses);
    }
    if (req.body.imagen){
        myQuery += " , imagen = ? ";
        myValues.push(req.body.imagen);
    }
    if (req.body.height){
        myQuery += " , height = ? ";
        myValues.push(req.body.height);
    }
    if (req.body.weights){
        myQuery += " , weights = ? ";
        myValues.push(req.body.weights);
    }
    if (req.body.category){
        myQuery += " , category = ? ";
        myValues.push(req.body.category);
    }
    if (req.body.abilities){
        myQuery += " , abilities = ? ";
        myValues.push(req.body.abilities);
    }
    if (req.body.types){
        myQuery += " , types = ? ";
        myValues.push(req.body.types);
    }

    myQuery += " WHERE id = ? "
    myValues.push(req.params.id);
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });

  //Delete Eliminar un pokemoon
app.delete('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();
    var myQuery= "DELETE FROM pokemon WHERE id = ?;";
    var myValues=[req.params.id];
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results);    
        connection.end();
    });
});


//Llamar puerto 
app.listen(3000,function(){console.log("Pokemon")})



