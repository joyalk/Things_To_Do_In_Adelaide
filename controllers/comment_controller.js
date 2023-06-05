const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()

router.post('/', (req, res) => {
    const comment = req.body.comment
    const event_id = req.body.event_id
    const userId = req.session.userId

    console.log(userId)

    Comment
        .create(comment, event_id, userId)
        .then(comment => res.json(comment))
})
router.get('/', (req, res) => {

    Comment
        .findAll()
        .then(comment => res.json(comment))
})

module.exports = router