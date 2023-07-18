const AuthorController = require('../controllers/author.controller')
module.exports = function(app){
    app.get('/', AuthorController.hello);
    app.get('/api/authors', AuthorController.getAll)
    app.get('/api/authors/:id', AuthorController.getOne)
    app.post('/api/authors', AuthorController.newOne)
    app.put('/api/authors/:id', AuthorController.updateOne)
    app.delete('/api/authors/:id', AuthorController.deleteOne)
}