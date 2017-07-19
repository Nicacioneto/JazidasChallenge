const express = require('express');
const bodyParser= require('body-parser')
const app = express();




var sql = require("mssql");
const config = {
    user: 'SA',
    password: 'Picachu123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'DesafioPokemon',
}

sql.connect(config).then(() => {
    return sql.query`select * from Pokemon where id = ${1}`
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})




app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function (){
  console.log('listening on 3000')
})
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})
app.post('/pokemon', (request, response) => {
  console.log(request.body)
})
