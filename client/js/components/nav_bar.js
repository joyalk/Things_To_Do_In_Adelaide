function renderNavBar() {
    if (state.loggedInUser) {
        document.querySelector('.header-nav').innerHTML =`
        <nav class="user-nav">
        <ul>
            <li class="material-symbols-outlined add-event" onClick="renderAddEvent()">add_circle</li>
            <li class="material-symbols-outlined edit-event" onClick="renderEventList()">edit</li>
            <li class="" onClick="renderViewComments()">view all comments</li>
            <li class="material-symbols-outlined logout" onClick="renderLogOut()">logout</li>
        </ul>
    </nav>
    `
    } else {
        document.querySelector('.header-nav').innerHTML =`
        <nav class="user-nav">
        <ul>
            <li class="material-symbols-outlined sign-up" onClick="renderSignUp()">person_add</li>
            <li class="material-symbols-outlined login" onClick="renderLogin()">login</li>
        </ul>
    </nav>
    `
    }
    
}


