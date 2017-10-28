const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/views'));

// Error handling
app.use(function(err, req, res, next) {
	console.log(err.message);
	res.status(500).send({"Error" : err.message});
});

app.listen(3000, function(){
	console.log('Server running on port 3000');
});
