const express = require("express")
const router = express.Router()
const Paris = require("../models/Paris");


router.get("/", (req, res) => {
    Paris.find({}).then(ideas => res.json(ideas));
})

module.exports = router