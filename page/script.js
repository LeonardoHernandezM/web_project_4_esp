

const buttonEdit = document.querySelector(".editbutton__pencil");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-description");
const buttonCloseIcon = document.querySelector(".closeicon");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const buttonSubmit = document.querySelector(".popup__submit-button");

 
buttonEdit.addEventListener("click", function () {
    popup.classList.add("open__popup");
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;   
})

buttonCloseIcon.addEventListener("click", function () {
    popup.classList.remove("open__popup");    
})

buttonSubmit.addEventListener("click", function (event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popup.classList.remove("open__popup");
})

