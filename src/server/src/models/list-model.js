const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
	_user: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
		required: true
	},
	watchlist: [{
		name: {
			type: String,
			required: true
		}
	}],
	favorites: [{
		name: {
			type: String,
			required: true
		},
		stars: {
			type: Number,
			required: false
		}
	}]
});

module.exports = mongoose.model('List', ListSchema);
