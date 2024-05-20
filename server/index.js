const express = require("express");
const app = express();
const Routes = require("./routes/routes");
var bodyParser = require('body-parser')
var cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', Routes)

app.get("/*",(req,res)=>{
    res.send("hello there");
})

app.listen(3001, ()=>{
console.log("Express Listening on port 3000");
})

