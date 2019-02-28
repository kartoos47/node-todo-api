const { MongoClient, ObjectID } = require('mongodb'); //Using ES6 object destructuring to set variables/constants directly from an object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Todos').find().toArray().then(
		(docs) => {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		},
		(err) => {
			console.log('Unable to fetch todos', err);
		}
	);

	// db.close();
});
