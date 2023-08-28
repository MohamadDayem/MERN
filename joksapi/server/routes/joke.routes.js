const joke = require('../controller/joke.controller')

module.exports = app => {
	app.post('/api/joke', joke.create);
	app.get('/api/joke', joke.getAll);
	app.get('/api/joke/:id', joke.getOne);
	app.patch('/api/joke/:id', joke.update);
	app.delete('/api/joke/:id', joke.delete);
}