let bar = document.querySelector('#bar')
let nav = document.querySelector('.nav-links')
let clos = document.querySelector('.close')



bar.addEventListener('click', () => {
    nav.classList.add('active')
})

clos.addEventListener('click', () => {
    nav.classList.remove('active')
})
