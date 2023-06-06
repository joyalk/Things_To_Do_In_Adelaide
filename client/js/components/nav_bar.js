function renderNavBar() {
    if (state.loggedInUser) {
        document.querySelector('.header-nav').innerHTML =`
        <nav class="user-nav">
        <ul>
            <li class="material-symbols-outlined add-event" onClick="renderAddEvent()">ADD EVENT</li>
            <li class="material-symbols-outlined edit-event" onClick="renderEventList()">HOME PAGE</li>
            <li class="" onClick="renderViewComments()">View all comments</li>
            <li class="material-symbols-outlined logout" onClick="renderLogOut()">LOG OUT</li>
        </ul>
    </nav>
    `
    } else {
        document.querySelector('.header-nav').innerHTML =`
        <nav class="user-nav">
        <ul>
            <li class="signup" onClick="renderSignUp()">SIGN UP</li>
            <li class="login" onClick="renderLogin()">login</li>
        </ul>
    </nav>
    `
    }
    
}


