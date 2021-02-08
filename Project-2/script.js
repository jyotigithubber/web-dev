'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function() 
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// console.log(btnsShowModal);

// when we use quesrySelectorAll then nodelist is created which is like array and we can loop through it 
for(let i = 0; i < btnsShowModal.length; i++)
{
    btnsShowModal[i].addEventListener('click', openModal);
}

// closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keypress event
document.addEventListener('keydown', function(e) {
    // console.log(e.key);
    if(e.key === 'Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            closeModal();
        }
    }
});