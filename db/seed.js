const mongoose = require('./connection')
const Paris = require('../models/Paris')
const seedData = require("./seedData")


Paris.deleteMany({}).then(() => {
    Paris.collection.insert(seedData)
    .then(ideas => {
        console.log(ideas)
    })
    .catch(err => {
        console.log(err)
    })
})


