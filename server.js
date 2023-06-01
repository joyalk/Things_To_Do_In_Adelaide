const express = require('express')

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const eventsController = require('./controllers/events_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

const app = express()
const port = 3000

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

app.use('/api/events', eventsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)