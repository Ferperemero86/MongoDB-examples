const {MongoClient,ObjectID} = require('mongodb');

///Connect to Mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('connection succesfull');
  const db = client.db('TodoApp');

  //Delete one document
  db.collection('Todos').findOneAndDelete({name:'Antonio'}).then((result) => {
    console.log(result);
  });

  //Delete many documents
  db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b850086eb84a503c66703e2')}).then((result) => {
    console.log(result);
  });

   //Find one document and delete
  db.collection('Todos').findOneAndDelete({location:'Barcelona'}).then((result) => {
    console.log(result);
  });

  //client.close();
});