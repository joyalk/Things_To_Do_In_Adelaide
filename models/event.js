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
      .then(dbRes =>
         dbRes.rows[0])
  },

  delete: (eventId) => {
    const sql = 'DELETE FROM events WHERE id = $1'

    return db.query(sql, [eventId])
  }
}

module.exports = Event