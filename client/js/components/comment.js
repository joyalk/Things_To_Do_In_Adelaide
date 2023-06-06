function renderComment(event_id) {
    document.querySelector('#page').innerHTML = `
      <h3> Post your comment </h3>
      <form id="addCommentForm" onsubmit="addComment(event, ${event_id})">
        <input type="text" id="addCommentInput">
        <button>Submit</button>
      </form>
      `
  }
  
  function addComment(event, event_id) {
    event.preventDefault()
  
    const commentInput = document.querySelector('#addCommentInput')
    const commentValue = commentInput.value
  
    fetch(`/api/comment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({comment: commentValue, event_id: event_id})
    })
        .then(res => res.json())
        .then(() => {
            console.log('Comment Added Successfully')
            location.reload()
        })
  }
  
  function renderViewComments(event_id, event_name) {
    const pageElement = document.querySelector('#page')
    pageElement.innerHTML = ''
  
    if (event_id && event_name) {
        const commentsForEvent = state.comments.filter(comment => comment.event_id === event_id)
        const commentsHTML = commentsForEvent.map(comment => `<li>${comment.comment}</li>`).join('')
        const eventHTML = `
        <h2>${event_name}</h2>
        <ul>
          ${commentsHTML}
        </ul>
      `
        pageElement.insertAdjacentHTML('beforeend', eventHTML)
    } else {
  
        state.events.forEach(event => {
            const commentsForEvent = state.comments.filter(comment => comment.event_id === event.id)
            const commentsHTML = commentsForEvent.map(comment => `<li>${comment.comment}</li>`).join('')
  
            const eventHTML = `
        <h2>${event.name}</h2>
        <ul>
          ${commentsHTML}
        </ul>
      `
            pageElement.insertAdjacentHTML('beforeend', eventHTML)
        })
    }
  }