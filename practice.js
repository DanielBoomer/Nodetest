var express = require ('express')
var app = express()
var users= [
  {name: 'Dan', identifier: '245'}, {name: 'John', identifier: '546'},
  {name: 'Brian', identifier: '546'}, {name: 'Paul', identifier: '546'},
  {name: 'Lou', identifier: '546'}
]
  var usernumber= [
    {Dan: '1'}, {John: '2'}, {Brian: '3'}
]

app.get('/user', function (req, res){
  console.log('port 3000')
res.send (users)
})

app.get('/user/:id', function (req, res){
  var id= req.params.id
  console.log(id)
  if (id <= users.length)
  {res.send (users [id-1])}
  else {res.send(404)}
})
app.get('/users/:id', function(req, res){
var id= req.params.id
console.log('generate number')
if(id<= usernumber.length)
{res.send (usernumber [id-1])}
else {res.send(404)}
})

app.listen(3000, function(){
  console.log('Server is on port 3000')
})
