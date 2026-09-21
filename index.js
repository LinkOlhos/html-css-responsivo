function gaveta(){
    let nav = document.querySelector("header nav");
    nav.classList.add("active");
}

function fechargaveta(){
    let nav = document.querySelector("header nav");
    let overlay = document.querySelector("#overlay");
    nav.classList.remove("active");
    overlay.classList.remove("active");
}