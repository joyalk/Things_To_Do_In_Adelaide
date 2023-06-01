function renderEventList() {
    document.querySelector('#page').innerHTML = `
      <section class="event-list">
        ${renderEvents()}
      </section>
    `
  }
  
  function renderEvents() {
    return state.events.map(event => `
    <section class="event" data-id='${event.id}'>
      <header>
        <h2>${event.name}</h2>
        <span class="" onClick="deleteEvent(event)">delete</span>

        <span class="" onClick="editEvent(event)">edit</span>
      </header>
      <img src="${event.img}" alt="">
      <p>${event.location}</p>
      <p>${event.description}</p>
    </section>
  `).join('')
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

  

  