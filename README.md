# Interface:
- see `queryType` inside main.js for interface/querying options

# Commits:
- a simple dice roll
- a dice roll with count param
- querying mongodb db for user count

# Dependencies:
- `brew install mongodb`
- `sudo mkdir -p /data/db` (creates data dir for `mongod`)
- `mongod` (starts mongo server)
- Seeds the db from mongo CLI:
  - `mongo` (runs mongo CLI)
  - `db.createCollection("users")` (creates a collection)
  - `db.users.insertOne({firstName: 'John', lastName: 'Doe'}` (inserts mock data)
  - `db.users.insertOne({firstName: 'Jane', lastName: 'Doe'}`


# Run:
- `npm install`
- `node index.js`
- When prompted for Client Request, type one of the following:
  - `{ hello }`
  - `{ diceRoll }`
  - `{ diceRoll(count: 10) }`
  - `{ usersCount }`
