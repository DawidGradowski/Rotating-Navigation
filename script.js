const container = document.getElementsByClassName('container')[0]

// Buttons
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');


openBtn.addEventListener('click', () => {
    container.classList.add("show-nav");
})

closeBtn.addEventListener('click', () => {
    container.classList.remove("show-nav");
})
