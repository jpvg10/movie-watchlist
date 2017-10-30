const express = require('express');
const router = express.Router();

router.post('/register', function(req, res){
	if(req.body.email && req.body.password){
		res.status(200).end();
	}else{
		res.status(400).json({
			success: false,
			message: 'error'
		});
	}
});

router.post('/login', function(req, res){
	if(req.body.email && req.body.password){
		res.status(200).end();
	}else{
		res.status(400).json({
			success: false,
			message: 'error'
		});
	}
});

module.exports = router;
