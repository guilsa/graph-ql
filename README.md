Interface:
- see `queryType` inside main.js for interface/querying options

Commits:
- a simple dice roll
- a dice roll with count param
- querying mongodb db for user count

Dependencies:
- `brew install mongodb`
- `sudo mkdir -p /data/db` (creates data dir for `mongod`)
- `mongod` (starts mongo server)
- `mongo` (runs mongo CLI)
- (from mongo CLI)
  - `db.createCollection("users")` (creates a collection)
  - `db.users.insertOne({firstName: 'John', lastName: 'Doe'}`
  - `db.users.insertOne({firstName: 'Jane', lastName: 'Doe'}` (inserts mock data)


Run:
- `npm install`
- `node index.js`
-  When prompted for Client Request, type one of the following:
  - `{ hello }`
  - `{ diceRoll }`
  - `{ diceRoll(count: 10) }`
  - `{ usersCount }`
