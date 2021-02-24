const button = document.querySelector('.btn')
const text = document.querySelector('.text')
let isShown = false;

function toggleText() {
    isShown ? ( button.innerText = 'Show text 👀', text.style.opacity = 0 ) : ( button.innerText = 'Hide text 🙈', text.style.opacity = 1 )

    isShown = !isShown;
}

button.addEventListener('click', () => { toggleText() } )