

let buttonEdit = document.querySelector(".editbutton__pencil");
let popup = document.querySelector(".popup");
let infoName = document.querySelector(".profile__info-name");
let infoJob = document.querySelector(".profile__info-description");
let profileName = document.querySelector(".popup__input1");
let profileJob = document.querySelector(".popup__input2");
let buttonCloseIcon = document.querySelector(".closeicon");
let inputName = document.querySelector(".profile__info-name");/*#fieldname*/
let inputJob = document.querySelector(".profile__info-description");/*#fieldjob*/
let buttonSubmit = document.querySelector(".popup__submit-button");
/*let profileName = document.querySelector(".popup__input1");
let profileJob = document.querySelector(".popup__input2");*/


buttonEdit.addEventListener("click", function () {
    popup.classList.add("open__popup");
    profileName.textContent = infoName.value;
    profileJob.textContent = infoJob.value;      
})

buttonCloseIcon.addEventListener("click", function () {
    popup.classList.remove("open__popup");    
})

buttonSubmit.addEventListener("click", function (event){
    event.preventDefault();
    inputName.textContent = profileName.value;
    inputJob.textContent = profileJob.value;
    popup.classList.remove("open__popup");
})

