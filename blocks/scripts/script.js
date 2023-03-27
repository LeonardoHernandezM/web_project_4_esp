

let buttonEdit = document.querySelector(".editbutton__pencil");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-description");
let buttonCloseIcon = document.querySelector(".closeicon");
let inputName = document.querySelector(".popup__input-name");
let inputJob = document.querySelector(".popup__input-job");
let buttonSubmit = document.querySelector(".popup__submit-button");

 
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

