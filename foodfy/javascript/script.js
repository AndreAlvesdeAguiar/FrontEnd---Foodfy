const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const imageId = card.getAttribute('id')
        const title = card.querySelector('.card__info').innerHTML
        const chef = card.querySelector('.card__chef').innerHTML

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/foodfy/assets/${imageId}.png`
        modalOverlay.querySelector('.modal-title').innerHTML = title
        modalOverlay.querySelector('.modal-chef').innerHTML = chef
    }) 
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})