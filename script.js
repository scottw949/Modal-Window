'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

//handle open model for btns
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//add event listener to each modal
for (let i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener('click', openModal);
}

//handle close button
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//handle close button
closeBtn.addEventListener('click', closeModal);

//handle overlay close click
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log('event below');
  //console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
