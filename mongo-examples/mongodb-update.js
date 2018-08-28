const {MongoClient,ObjectID} = require('mongodb');

//Connect to Mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
      return console.log('unable to connect');
  }
  console.log('succesfully connected to the database');
  //Use client for Mongo 3.0 version
  const db = client.db('TodoApp');
  
  //Find and update document
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b8541ab6b2a5442212650a1')
      }, {

        $set: {
          name: 'Fernando'
        },
        $inc: {
          age: 1
        }

      },{
      returnOriginal: false
 }).then((result) => {
      console.log(result);
    });

  //db.close();
});