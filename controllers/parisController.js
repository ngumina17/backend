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

// router.put("/:id", (req, res) => {
//     console.log(req.params.id)
//     let giffy = req.body
//     let id = req.params.id
//     Gifs.findOneAndUpdate({ _id: id }, giffy, { new: true })
//       .then(() => {Gifs.find({}).then(gifs => res.json(gifs))
//     });
// })

// router.delete('/:id', (req, res) => {
//     Gifs.findOneAndRemove({ _id: req.params.id })
//       .then(() => {
//         res.redirect('/')
//       })
//   })

module.exports = router