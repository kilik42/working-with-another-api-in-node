var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  {
    "id": "232kAk",
    "text": "eggs"
  },
  {
    "id": "dkP345",
    "text": "milk"
  },
  {
    "id": "dkcuu7",
    "text": "bacon"
  },
  {
    "id":"73hdy",
    "text":"frogs legs"
  }
];

app.get('/ingredients', function(req, res){
  res.send(ingredients);

});

// app.get('/funions', function(req, res){
//   res.send('you give some funions too');
// });

app.post('/ingredients', function(req, res){
  var ingredient= req.body;
  if(!ingredient || ingredient.text === ""){
    res.status(500).send({error: "your ingredient must have text"});
  } else{
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }

});


app.put('/ingredients/:ingredientId', function(req, res){

  var ingredientId = req.params.ingredientId;
  var newText = req.body.text;
  if(!newText || newText === ""){
    res.status(500).send({error:"you must provide ingredient text"});
  } else {
    var objectFound = false;
    for(var x = 0; x <ingredients.length; x++){
          var ing = ingredients[x];
          if(ing.id === req.params.ingredientId){
            ingredients[x].text = newText;
            objectFound = true;
            break;
          }
    }

    if(!objectFound){
      res.status(500).send({error:"ingredientId not found"});
    } else{
      res.send(ingredients);
    }

  }

});

app.listen(3000, function(){
  console.log("first api running on port 3000");
});
