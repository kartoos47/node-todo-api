const { MongoClient, ObjectID } = require('mongodb'); //Using ES6 object destructuring to set variables/constants directly from an object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate(
	// 		{ _id: new ObjectID('5c78e518a5be881bbd5c7dcf') },
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		},
	// 		{
	// 			returnOriginal: false
	// 		}
	// 	)
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	db
		.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('5c779a3217972927a4a566d8')
			},
			{
				$set: {
					name: 'Mark Zuckerberg'
				},
				$inc: {
					age: 1
				}
			},
			{
				returnOriginal: false
			}
		)
		.then((result) => {
			console.log(result);
		});

	// db.close();
});
