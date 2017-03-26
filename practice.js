var express = require ('express')
var app = express()
var users= [
  {name: 'Dan'}, {name: 'John'}, {name: 'Brian'}, {name: 'Paul'}, {name: 'Lou'}
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

app.listen(3000, function(){
  console.log('Server is on port 3000')
})
