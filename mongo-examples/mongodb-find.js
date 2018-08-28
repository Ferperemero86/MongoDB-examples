const {MongoClient, ObjectID} = require('mongodb');

//Connect to Mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //Use client for Mongo 3.0 version
  const db = client.db('TodoApp');
  
  //Find and count documents in the collection
  db.collection('Todos').find().count().then((count) => {
    console.log(`todos count: ${count}`);
  }, (err) => {
       console.log('Unable to fetch todos', err);
     });
    
    //client.close();
});