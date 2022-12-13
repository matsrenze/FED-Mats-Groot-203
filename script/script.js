var nav = document.querySelector("header>nav:nth-of-type(2)");
var button = document.querySelector("header>nav>ul>li>button");
var Sluitbutton = document.querySelector("nav:nth-of-type(2)>ol>li>button");
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit

button.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    nav.classList.remove("wegMenu");
    nav.classList.add("toonMenu");

    console.log("hoi")
}

Sluitbutton.addEventListener("click", sluitMenu);

function sluitMenu() {
    nav.classList.remove("toonMenu");
    nav.classList.add("wegMenu");
}