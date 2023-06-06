const db = require('../db/db')

const Event = {
  findAll: () => {
    const sql = 'SELECT * FROM events'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, img, location, description) => {
    const sql = `
      INSERT INTO events(name, img, location, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `
    return db
      .query(sql, [name, img, location, description])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (eventId) => {
    const sql = 'DELETE FROM events WHERE id = $1'
    return db.query(sql, [eventId])
  },
  findById: (eventId) => {
    const sql = 'SELECT * FROM events WHERE id = $1'
    return db
    .query(sql, [eventId])
    .then(dbRes => dbRes.rows[0])
  },

  update: (name, img, location, description, id) => {
    const sql = `
      UPDATE events SET name = $1, img = $2, location = $3, description = $4 WHERE id = $5
      RETURNING *
    `
    return db
      .query(sql, [name, img, location, description, id])
      .then(dbRes => dbRes.rows[0])

  },
  
  search: (searchTerm) => {
    const sql = 'SELECT * FROM events WHERE name ILIKE $1 OR description ILIKE $1'
    const searchValue = `%${searchTerm}%`

    return db.query(sql, [searchValue])
        .then(dbRes => dbRes.rows)
  }
 }

module.exports = Event