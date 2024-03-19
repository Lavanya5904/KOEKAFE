let popup=document.getElementById("popup-id");
let button=document.getElementById("btn")

function openPopup(){
    popup.classList.add("openpopup");
    button.style.display="none";
}

function closePopup(){
    popup.classList.remove("openpopup");
    button.style.display="block";
}