// Declaring DOM elements
const hamburgerBtn = document.getElementById('btn');

hamburgerBtn.addEventListener('click', () => {
    console.log('✔️')
    document.getElementById('ul-nav').classList.toggle('hide')
})