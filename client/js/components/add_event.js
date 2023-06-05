function renderAddEvent() {
  document.querySelector('#page').innerHTML = `
      <section class='create-event'>
        <form action="" onSubmit="createNewEvent(event)">
          <h2>Add Event</h2>
          <fieldset>
            <label for="">Name: </label>
            <input type="text" name="name">
          </fieldset>
          <fieldset>
            <label for="">Image: </label>
            <input type="text" name="img">
          </fieldset>
          <fieldset>
            <label for="">Location: </label>
            <input type="text" name="location">
          </fieldset>
          <fieldset>
            <label for="">Description: </label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
          </fieldset>
          <button>Add Event</button>
        </form>
      </section>
    `
}

function createNewEvent(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/events', {
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