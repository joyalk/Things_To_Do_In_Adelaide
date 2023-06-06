const state = {
  events: [],
  comments: []
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

fetch(`/api/comment`, {
  method: 'GET',
})
  .then(res => res.json())
  .then(comments => {
      state.comments = comments
  })
  
renderNavBar()