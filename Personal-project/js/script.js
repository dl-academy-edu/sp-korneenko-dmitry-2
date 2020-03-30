let modalButton = document.querySelector('.modal-button_js');
let modalWindow = document.querySelector('.modal-window');
let closeModalButton = document.querySelector('.close-form-button');

function showModal(){
    modalWindow.classList.toggle('hidden')
};

modalButton.addEventListener ('click', function (evt) {
    evt.preventDefault(); showModal();
 });

closeModalButton.addEventListener ('click', function (evt) {
    evt.preventDefault(); showModal();
 });


 document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) showModal();
  }); 