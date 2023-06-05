function renderEventList() {
  document.querySelector('#page').innerHTML = `
  <section class="event-list">
    ${renderEvents()}
  </section>
`
}

function renderEvents() {
  return state.events
      .map(event => {
          const commentsForEvent = state.comments.filter(comment => comment.event_id === event.id)
          const commentsHTML = commentsForEvent.map(comment => `<li>${comment.comment}</li>`).join('')

          return `
      <section class="event" data-id="${event.id}">
        <header>
          <h2>${event.name}</h2>
          <span class="" onClick="deleteEvent(event)">delete</span>
          <span class="" onClick="editEvent(event)">edit</span>
          <button class="" onClick="renderComment(${event.id})">add comment</button>
          <button class="" onClick="renderViewComments(${event.id}, '${event.name}')">view comment</button>
        </header>
        <img src="${event.img}" alt="" class="event-image">
        <p>${event.location}</p>
        <p>${event.description}</p>
        
        <h3>Comments:</h3>
        <ul>
          ${commentsHTML}
        </ul>
      </section>
    `
      })
      .join('')
}

function deleteEvent(event) {
  const deleteBtn = event.target
  const eventDOM = deleteBtn.closest('.event')
  const eventId = eventDOM.dataset.id
  fetch(`/api/events/${eventId}`, {
      method: 'DELETE'
  })
      .then(() => {
          state.events = state.events.filter(t => t.id != eventId)
          renderEventList()
      })
}

function renderEditForm(event) {
  const editBtn = event.target
  const eventDOM = editBtn.closest('.event')
  const eventId = eventDOM.dataset.id
  const eventToEdit = state.events.filter(event => event.id == eventId)

  document.querySelector('#page').innerHTML = `
  <section class='edit' data-id=${eventId}>
    <form action="" onSubmit="editEvent(event)">
      <h2>Edit</h2>
      <fieldset>
        <label for="">Name: </label>
        <input type="text" name="name" value="${eventToEdit[0].name}">
      </fieldset>
      <fieldset>
        <label for="">Image: </label>
        <input type="text" name="img" value="${eventToEdit[0].img}">
      </fieldset>
      <fieldset>
        <label for="">Location: </label>
        <input type="text" name="location" value="${eventToEdit[0].location}">
      </fieldset>
      <fieldset>
        <label for="">Description: </label>
        <textarea name="description" id="" cols="30" rows="10">${eventToEdit[0].description}</textarea>
      </fieldset>
      <button>update</button>
    </form>
  </section>
`
}

function editEvent(event) {
  const form = event.target
  const eventDOM = form.closest('.edit')
  const eventId = eventDOM.dataset.id
  const data = Object.fromEntries(new FormData(form))
  console.log(form)
  fetch(`/api/events/${eventId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(event => {
          state.events.push(event)
          renderEventList()
      })
}

function searchEvents() {
  let searchQuery = document.getElementById('searchInput').value

  fetch(`/api/events/search?term=${searchQuery}`)
      .then(response => response.json())
      .then(results => {
          let content = document.getElementById('page')
          content.innerHTML = ''

          if (results.length === 0) {
              content.innerHTML = 'No events found.'
          } else {
              results.forEach(event => {
                  const commentsForEvent = state.comments.filter(comment => comment.event_id === event.id)
                  const commentsHTML = commentsForEvent.map(comment => `<li>${comment.comment}</li>`).join('')

                  let eventElement = document.createElement('div')
                  eventElement.innerHTML = `
          <h3>${event.name}</h3>
          <p>${event.description}</p>
          <img src="${event.img}" class="event-image" alt="${event.name}">
          <h3>Comments:</h3>
          <ul>
            ${commentsHTML}
          </ul>
        `
                  content.appendChild(eventElement)
              })
          }
      })
      .catch(error => {
          console.error('An error occurred during the search:', error)
      })

  document.getElementById('searchInput').value = ''
}