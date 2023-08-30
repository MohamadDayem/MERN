const auther = require('../controllers/auther.controller')

module.exports = app => {
	app.post('/api/auther', auther.create);
	app.get('/api/auther', auther.getAll);
	app.get('/api/auther/:id', auther.getOne);
	app.patch('/api/auther/:id', auther.update);
	app.delete('/api/auther/:id', auther.delete);
}