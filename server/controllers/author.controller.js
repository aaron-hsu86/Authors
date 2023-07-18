const Author = require('../models/author.model')
module.exports = {
    hello: (req,res) => {res.json({message: 'Hello there!'})},
    getAll: (req,res) => {
        Author.find()
            .then(authors=>{res.json(authors)})
            .catch(err=>res.json(err))
    },
    getOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(author=>{
                res.json(author)
            }).catch(err=>res.status(400).json(err))
    },
    newOne: (req, res) => {
        Author.create(req.body)
        .then(newAuthor => {
            res.json(newAuthor)
        }).catch(err=>{
            res.status(400).json(err)
        })
    },
    updateOne: (req, res) => {
        Author.findOneAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true} )
            .then(author=>{
                res.json(author)
            }).catch(err=>res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(author=>{
                res.json(author)
            }).catch(err=>res.json(err))
    }
}