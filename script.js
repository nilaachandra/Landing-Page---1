const revealTxt = document.getElementById('revealTxt');
const hiddenTxt = document.querySelector('.theText')

revealTxt.addEventListener('click', function() {
    hiddenTxt.classList.toggle('active');
})