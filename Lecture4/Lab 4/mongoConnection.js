const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");               //takes settings.json for satabase configuration
const mongoConfig = settings.mongoConfig;           //inside settings.json takes the mongoconfig database

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);   //connects to object server url in settings.json
    _db = await _connection.db(mongoConfig.database);                //db connects to the specific database that is in settings.json
  }

  return _db;
};
