// MongoDB driver
const { MongoClient } = require('mongodb');
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017/test';

// GraphQL
const { graphql } = require('graphql');
const readline = require('readline');

const mySchema = require('./schema/main');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');

  rli.question('Client Requrst: ', inputQuery => {
    graphql(mySchema, inputQuery, {}, { db }).then(result => {
      console.log('Server Answer: ', result.data);
      db.close(() => rli.close());
    });

    rli.close();
  });
})
