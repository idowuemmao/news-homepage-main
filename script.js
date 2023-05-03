const show = document.querySelector('.show')
const hide = document.querySelector('.hide')

show.addEventListener("click", () => {
    if (show.classList.contains('active')) {
        show.classList.remove('active')
        hide.classList.add('active')
    }
})
hide.addEventListener("click", () => {
    if (hide.classList.contains('active')) {
        hide.classList.remove('active')
        show.classList.add('active')
    }

})

