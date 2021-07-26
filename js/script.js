function removeUsualPopup(element) {
    return element.classList.remove("show-usual-popup");
}

function showUsualPopup(element) {
    return element.classList.add("show-usual-popup");
}

function showFlexPopup(element) {
    return element.classList.add("show-flex-popup");
}

function removeFlexPopup(element) {
    return element.classList.remove("show-flex-popup");
}

function popupControl(){
    let mapCloseBtn = document.querySelector(".map-popup .close-button");
    let mapOpenBtn = document.querySelector(".main-contacts .contacts-map-button");
    let mapPopup = document.querySelector(".map-popup");
    
    mapOpenBtn.addEventListener('click', (evt) =>{
        evt.preventDefault();
        showUsualPopup(mapPopup);
    });
    
    mapCloseBtn.addEventListener('click', (evt) =>{
        evt.preventDefault();
        removeUsualPopup(mapPopup);
    });
    
    let contactsPopup = document.querySelector(".write-us-form");
    let contactsButton = document.querySelector(".main-contacts .main-contacts-button");
    let contactsClose = document.querySelector(".write-us-form .close-button");
    
    contactsButton.addEventListener('click', (evt) =>{
        evt.preventDefault();
        showFlexPopup(contactsPopup);
    });
    
    contactsClose.addEventListener('click', (evt) =>{
        evt.preventDefault();
        removeFlexPopup(contactsPopup);
    });

    let bookmarkPopup = document.querySelector(".main-add");
    let bookmarkButton = document.querySelector(".action-choice .bookmark");
    let bookmarkClose = document.querySelector(".main-add .close-button");

    console.log(bookmarkButton);
    
    bookmarkButton.addEventListener('click', (evt) =>{
        evt.preventDefault();
        showFlexPopup(bookmarkPopup);
    });
    
    bookmarkClose.addEventListener('click', (evt) =>{
        evt.preventDefault();
        removeFlexPopup(bookmarkPopup);
    });
    
    window.addEventListener('keydown', (evt) =>{
        if(evt.key == "Escape"){
            evt.preventDefault();
            removeUsualPopup(mapPopup);
            removeFlexPopup(contactsPopup);
            removeFlexPopup(bookmarkPopup);
        }
    });
}

popupControl();

function servicesButtonControl(){
    let servicesButtonsWraps = document.querySelectorAll(".main-services-list-item");
    let servicesButtons = document.querySelectorAll(".services-list-button");
    let servicesDescription = document.querySelectorAll(".main-services-description-item");

    servicesButtons.forEach(function(item, i, arr){
        item.addEventListener('click', (evt) =>{
            evt.preventDefault();
            for(let j = 0; j < servicesButtons.length; j++){
                if(servicesButtonsWraps[j].classList.contains("main-services-list-item-active")){
                    servicesButtonsWraps[j].classList.remove("main-services-list-item-active");
                    servicesDescription[j].classList.remove("show-flex-popup");
                }
            }
            servicesButtonsWraps[i].classList.add("main-services-list-item-active");
            servicesDescription[i].classList.add("show-flex-popup");
        });
    });
}

servicesButtonControl();  