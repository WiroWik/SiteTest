function hoverDescLegal() {
    var element = document.getElementById("descLegal")
    element.classList.toggle("moveDesc");
}

function hoverDescIllegal() {
    var element = document.getElementById("descIllegal")
    element.classList.toggle("moveDesc");
}

function darkMod() {
    darkBody()
    darkContainer()
    darkTitre()
    darkChoix()
    darkBouton()
    darkSpinBoi()
    darkligne()
}

function darkBody() {
    var element = document.body
    element.classList.toggle("darkModBody")
}

function darkContainer() {
    var element = document.getElementById("main")
    element.classList.toggle("darkContain")
}

function darkTitre() {
    var element = document.getElementById("titleContent")
    element.classList.toggle("darkTitle")
}

function darkChoix() {
    var element = document.getElementById("legal")
    element.classList.toggle("darkChoices")

    var element1 = document.getElementById("illegal")
    element1.classList.toggle("darkChoices")
}

function darkBouton() {
    var element = document.getElementById("darkButton")
    element.classList.toggle("darkerButton")
}

function darkSpinBoi() {
    var element = document.getElementById("darkButton")
    element.classList.toggle("spinny")
}

function darkligne() {
    var element = document.getElementById("mainLine")
    element.classList.toggle("darkLine")
}
