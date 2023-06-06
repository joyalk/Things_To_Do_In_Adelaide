const db = require('../db/db')

const Comment = {
    create: (comment, event_id, user_id) => {
        const sql = `
      INSERT INTO comments(comment, event_id, user_id)
      VALUES ($1, $2, $3)
      RETURNING *
    `
        return db
            .query(sql, [comment, event_id, user_id])
            .then(dbRes => dbRes.rows)
    },
    findAll: () => {
        const sql = `
            SELECT * FROM comments
        `

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Comment