const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Partials = require('express-partials');
const Promise = require('bluebird');
const db = require('../database/db.js');
let app = Express();
const port = 4420;

app.use(Express.static(__dirname + '/../public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	db.getOne(1).then((results) => {
		res.status(200).end(JSON.stringify(results));
	});
})

app.get('/amenities/:Id', (req, res) => {
	db.getOne(req.params.id).then((results) => {
		res.status(200).end(JSON.stringify(results));
	});
});

app.listen(port, () => console.log('server is listening at port:' + port));