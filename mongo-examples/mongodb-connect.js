const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

//Connect to database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //Use client for the version 30 of Mongo
  const db = client.db('TodoApp');
    
    //Insert data(documents) in the collection
    db.collection('Todos').insertOne({
        text: 'This is a example',
        completed: false
    }, (err, res) => {
        if (err) {
           return console.log('it was a problem introducing data')
        } 

        console.log('data inserted succesfully');

    });

    //Close connection
    client.close();
});