const { MongoClient, ObjectID } = require('mongodb'); //Using ES6 object destructuring to set variables/constants directly from an object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({ text: 'Walk the dog' }).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
	// 	console.log(result);
	// });

	// db.close();
});
