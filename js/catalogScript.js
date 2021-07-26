function showFlexPopup(element) {
    return element.classList.add("show-flex-popup");
}

function removeFlexPopup(element) {
    return element.classList.remove("show-flex-popup");
}

function popupControl(){

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
            removeFlexPopup(bookmarkPopup);
        }
    });
}

popupControl();