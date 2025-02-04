const popup = document.querySelector('.popup');window.addEventListener('click', (event) => {

    if(event.target.matches('#open-modal')){
        popup.classList.add('open')
    }

    if(event.target.matches('.popup') || event.target.matches('#close-button')){
        popup.classList.remove('open')
    }
})