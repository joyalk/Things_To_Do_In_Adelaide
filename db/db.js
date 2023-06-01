const pg = require('pg')

let db

if (process.env.DB_PASSWORD) {
  db = new pg.Pool({
    database: 'things_to_do_in_adelaide',
    password: process.env.DB_PASSWORD
  })
} else { 
  db = new pg.Pool({
    database: 'things_to_do_in_adelaide'
  })
}

module.exports = db