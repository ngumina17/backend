const express = require('express')
const app = express()
const parser = require('body-parser')
const parisController = require("./controllers/parisController")



app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('/', (req,res) => {
    res.send('hitting default route')
  })


app.use("/paris/", parisController)





app.listen(3000, () => console.log("Running on port 3000!"))