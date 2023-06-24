var hamburger = document.querySelector('.hamburger-btn')
var ul = document.querySelector('.hamburger-menu')


// Function for closing hamburger menu
function closeMenu() {
    ul.classList.remove('show-menu')

    // aria-expanded
    hamburger.setAttribute('aria-expanded', 'false')

}

// Function for opening hamburger menu
function openMenu() {
    var isOpen = ul.classList.contains('show-menu')
    //hamburger.classList.toggle('show-menu', !isOpen)
    ul.classList.toggle('show-menu', !isOpen)
    // aria-expanded
    hamburger.setAttribute('aria-expanded', !isOpen)

    

    if (isOpen) {
        hamburger.focus()
    }
}

// Escape key to close menu in mobile-mode
document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        if (ul.classList.contains('show-menu')) {
            closeMenu()
            hamburger.focus()
        }
        

    }
})

hamburger.addEventListener('click', openMenu)
document.addEventListener('click', function(e) {
    if (!ul.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu()
    }
})