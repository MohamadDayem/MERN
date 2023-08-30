const auther = require('../models/auther.model');

module.exports = {
	create: (req, res) => {
	auther.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	getAll: (req, res) => {
		auther.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	getOne: (req, res) => {
		auther.findById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	update: (req, res) => {
		auther.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	delete: (req, res) => {
		auther.findByIdAndDelete(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
};