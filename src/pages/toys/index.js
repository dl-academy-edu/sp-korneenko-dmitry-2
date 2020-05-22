//FEEDBACK FORM

let modalButton = document.querySelector('.modal-button_js');
let modalWindow = document.querySelector('.modal-window');
let closeModalButton = document.querySelector('.close-form-button');

function showModal(){
    modalWindow.classList.toggle('hidden')
};

function closeModal(){
    modalWindow.classList.add('hidden')
}

modalButton.addEventListener('click', function (evt) {
    evt.preventDefault(); showModal();
 });

closeModalButton.addEventListener ('click', function (evt) {
    evt.preventDefault(); closeModal();
 });


 document.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 27) {
        closeModal()}
  }); 


//HEADER-MENU

let headerMenuButton = document.querySelector('.header__menu-link_js');
let headerMenuModal = document.querySelector('.header__modal-menu_js');
let headerMenuCloseButton = document.querySelector('.header__close-modal_js')

function showHeaderMenu(){
    headerMenuModal.classList.remove('hidden')
};

function closeHeaderModal(){
    headerMenuModal.classList.add('hidden')
};


headerMenuButton.addEventListener('click', function (evt) {
    evt.preventDefault(); showHeaderMenu();
 });

headerMenuCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault(); closeHeaderModal();
})

document.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 27) {
        closeHeaderModal()}
  });

