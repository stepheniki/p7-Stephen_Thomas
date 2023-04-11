/************************************************************************************************************************************** */
/* ------------------------------------   Barre de recherche tags "ingrédients"   -------------------------------------------*/
/************************************************************************************************************************************** */

function ingredientSearch(e) {

    const ingredientList = document.querySelectorAll('.ingredient_tag')
    ingredientList.forEach(ingredient => {
        if (ingredient.innerText.toLowerCase().includes(e.target.value)) {
            ingredient.style.display = "block"
        } else {
            ingredient.style.display = "none"
        }
    })
}

// Recherche des ingrédients quand on tape sur le clavier
const ingredientInput = document.getElementById('sort-by-ingredients');
const ingredientGrid = document.querySelector('.ingredients-section')

ingredientInput.addEventListener('keyup', function (e) {
    ingredientSearch(e)
    document.querySelector('.ingredients-section').style.display = "grid"
    ingredientInput.placeholder = "Rechercher un ingrédient"
})

// Au clic sur "ingrédients", 
ingredientInput.addEventListener('click', () => {
    ingredientInput.value = ""
    document.querySelector('.close-ingredient-button').style.display = "grid"
    document.querySelector('.open-ingredient-button').style.display = "none"

})

document.querySelector('.close-ingredient-button').addEventListener('click', (e) => { // quand on clique sur l'icone de fermeture
    ingredientGrid.style.display = "none" // la liste des ingrédients disparait
    e.preventDefault()
    ingredientInput.value = "Ingrédients"
})

/************************************************************************************************************************************** */
/* ------------------------------------   Barre de recherche tags "appareils"   -------------------------------------------*/
/************************************************************************************************************************************** */

function devicesSearch(e) {

    const deviceList = document.querySelectorAll('.device_tag')
    deviceList.forEach(device => {
        if (device.innerText.toLowerCase().includes(e.target.value)) {
            device.style.display = "block"
        } else {
            device.style.display = "none"
        }
    })
}

// Recherche des appareils quand on tape sur le clavier
const devicesInput = document.getElementById('sort-by-appareils');
const devicesGrid = document.querySelector('.appareils-section')

devicesInput.addEventListener('keyup', function (e) {
    devicesSearch(e)
    document.querySelector('.appareils-section').style.display = "grid"
    devicesInput.placeholder = "Rechercher un appareil"
})

// Au clic sur "appareils", 
devicesInput.addEventListener('click', () => {
    devicesInput.value = "" // "rechercher un appareil" s'affiche
    document.querySelector('.close-devices-button').style.display = "grid"
    document.querySelector('.open-devices-button').style.display = "none"

})

document.querySelector('.close-devices-button').addEventListener('click', (e) => { // quand on clique sur l'icone de fermeture
    devicesGrid.style.display = "none" // la liste se ferme
    e.preventDefault()
    devicesInput.value = "Appareils"
})

/************************************************************************************************************************************** */
/* ------------------------------------   Barre de recherche tags "ustensiles"   -------------------------------------------*/
/************************************************************************************************************************************** */

function ustensilsSearch(e) {

    const ustensilList = document.querySelectorAll('.ustensil_tag')
    ustensilList.forEach(ustensil => {
        if (ustensil.innerText.toLowerCase().includes(e.target.value)) {
            ustensil.style.display = "block"
        } else {
            ustensil.style.display = "none"
        }
    })
}

// Recherche des ustensiles quand on tape sur le clavier
const ustensilsGrid = document.querySelector('.ustensils-section')
const ustensilsInput = document.getElementById('sort-by-ustensils');

ustensilsInput.addEventListener('keyup', function (e) {
    ustensilsSearch(e)
    document.querySelector('.ustensils-section').style.display = "grid" // affichage du tableau
    ustensilsInput.placeholder = "Rechercher un ustensile" // affichage du placeholder
})

// Au clic sur "ustensils", 
ustensilsInput.addEventListener('click', () => {
    ustensilsInput.value = "" // "rechercher un ustensile" s'affiche
    document.querySelector('.close-ustensils-button').style.display = "grid"
    document.querySelector('.open-ustensils-button').style.display = "none"

})

document.querySelector('.close-ustensils-button').addEventListener('click', (e) => { // quand on clique sur l'icone de fermeture
    ustensilsGrid.style.display = "none" // la liste se ferme
    e.preventDefault()
    ustensilsInput.value = "Ustensiles" // affichage de "ustensiles"
})