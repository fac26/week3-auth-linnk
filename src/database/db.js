const fs = require('node:fs');
const path = require('node:path');
const Database = require('better-sqlite3');

//const db = new Database(process.env.DB_FILE);
const db = new Database("db.sqlite")

const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');
db.exec(schema);

module.exports = db;
