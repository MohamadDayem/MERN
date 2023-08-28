const joke = require('../models/joke.model');

module.exports = {
	create: (req, res) => {
		joke.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	getAll: (req, res) => {
		joke.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	getOne: (req, res) => {
		joke.findById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	update: (req, res) => {
		joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	delete: (req, res) => {
		joke.findByIdAndDelete(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
};