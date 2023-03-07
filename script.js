

let buttonEdit = document.querySelector(".editbutton__pencil");
let popup = document.querySelector(".popup");
/*let infoName = document.querySelector(".profile__info-name");*/
/*let infoJob = document.querySelector(".profile__info-description");*/
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-description");
let buttonCloseIcon = document.querySelector(".closeicon");
let inputName = document.querySelector(".popup__input-name");/*#fieldname*/
let inputJob = document.querySelector(".popup__input-job");/*#fieldjob*/
let buttonSubmit = document.querySelector(".popup__submit-button");
/*let profileName = document.querySelector(".popup__input1");
let profileJob = document.querySelector(".popup__input2");*/


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

