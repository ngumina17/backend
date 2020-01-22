const express = require("express")
const router = express.Router()
const Paris = require("../models/Paris");


router.get("/", (req, res) => {
    Paris.find({}).then(ideas => res.json(ideas));
})

router.post("/", (req, res) => {
    let newIdea = req.body;
    // console.log('this is new Gif', newGif);
    Paris.create(newIdea).then(Paris.find({}).then(ideas => res.json(ideas))
    // res.json( {newIdea} )
)})

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    let updateIdea = req.body
    let id = req.params.id
    Paris.findOneAndUpdate({ _id: id }, updateIdea, { new: true })
      .then(() => {Paris.find({}).then(ideas => res.json(ideas))
    });
})

router.delete("/:id", (req, res) => {
    console.log("hit delete", req.params.id)
    let id = req.params.id
    Paris.findOneAndDelete({ _id: id }).then(() => {
        Paris.find({}).then(ideas => res.json(ideas))
    }) 
})

module.exports = router