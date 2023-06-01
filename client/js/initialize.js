const state = {
    events: []
  }
fetch('/api/events')
.then(res => res.json())
.then(events => {
      state.events = events
renderEventList()
})

fetch('/api/sessions')
.then(res => res.json())
.then(data => {
  if (data.result === 'successful') {
    state.loggedInUser = data.email
  }
})
