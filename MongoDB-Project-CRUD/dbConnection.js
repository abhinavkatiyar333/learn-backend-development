
const { MongoClient } = require('mongodb');

// connection url
let dbConnectionUrl = `mongodb://127.0.0.1:27017`
const client = new MongoClient(dbConnectionUrl);
let dbConnection = async () => {
          // for client connect with mongoDB
          await client.connect();
          // create a new database
          let db = client.db("mongoDbprojec_Database")
          return db;

}
module.exports = { dbConnection }