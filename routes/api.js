const express = require('express');
const router = express.Router();

router.get('/movies', function(req, res){
	let movies = ['One Flew Over The Cuckoo\'s Nest', 'Inglourious Basterds', 'Interstellar'];
	res.send(movies);
});

module.exports = router;
