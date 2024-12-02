const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, '../db.json');

const readDB = () => {
  if (!fs.existsSync(dbFile)) {
    return { users: [], tasks: [], categories: [] };
  }
  return JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
};

const writeDB = (data) => {
  const currentData = readDB();
  fs.writeFileSync(dbFile, JSON.stringify({ ...currentData, ...data }, null, 2));
};

module.exports = { readDB, writeDB };
