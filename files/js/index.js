// Navbar JS
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const link = document.getElementsByClassName("link")[0]
const link2 = document.getElementsByClassName("link2")[0]
const link3 = document.getElementsByClassName("link3")[0]
const link4 = document.getElementsByClassName("link4")[0]
const link5 = document.getElementsByClassName("link5")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})
// 

link.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
    // $("navbar-links").prop('active', true);
})

link2.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
    // $("navbar-links").prop('active', true);
})

link3.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
    // $("navbar-links").prop('active', true);
})

link4.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
    // $("navbar-links").prop('active', true);
})

link5.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
    // $("navbar-links").prop('active', true);
})
