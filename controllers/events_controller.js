const express = require('express')
const router = express.Router()
const Event = require('../models/event')

router.get('/', (req, res) => {
  Event
    .findAll()
    .then(events => res.json(events))
})

router.post('/', (req, res) => {
  const name = req.body.name
  const img = req.body.img
  const location = req.body.location
  const description = req.body.description

  Event
    .create(name, img, location, description)
    .then(event => res.json(event))
})

router.delete('/:id', (req, res) => {
  const eventId = req.params.id

  Event
    .delete(eventId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router
