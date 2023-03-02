const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:3000';
const dbName = 'EmployeeDB';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);

  const employee = {
    name: 'Sarman Hosen',
    department: 'Web application',
    salary: 25000,
    designation: 'junior developer',
    employee_type: 'Full-Time'
  };

  db.collection('Employee').insertOne(employee, function(err, result) {
    if (err) throw err;
    console.log('Employee added to database');
  });

  // Add other database operations here

  client.close();
});