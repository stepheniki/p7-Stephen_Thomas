/************************************************************************************************************************************** */
//                                          Barre de recherche principale  - Algorythme version 1 - Boucles natives "for"
/************************************************************************************************************************************** */
// Recherche globale en entrant au moins trois lettres dans la barre de recherche. 
//Cela recherche les différentes recettes qui incluent le mot tapé dans la description, les ingrédients et le nom de la recette, puis affiche les recettes trouvées.

function globalSearch() {
    const inputArray = [] // Création d'un tableau vide
    let searchField = document.getElementById('principal_search-bar').value // Selection de la barre de recherche principale

    if (searchField.replace(/\s+/g, '').length < 3) { // Les espaces ne sont pas comptés comme des caractères, les supprimer de la chaîne de recherche avant de vérifier sa longueur
        document.querySelector('.search_error').style.display = "block";
    } else {
        document.querySelector('.search_error').style.display = "none" // OU on tape plus de 3 lettres ... Message erreur disparait


        for (let i = 0; i < recipes.length; i++) { // Incrémentation de la valeur "letters" // passe sur chacune des recettes
            let displaySort = false // Affichage du tri

            // Recherche du texte tapé dans les noms de recettes
            let names = recipes[i].name

            let searchWord = searchField.toLowerCase().split(' ') // Diviser la chaîne de recherche en mots individuels 
            if (searchWord.every(word => names.toLowerCase().includes(word)) && displaySort == false) {    // Si chaque mot est trouvé dans le nom de la recette...
                inputArray.push(recipes[i]) // ... la recette s'affiche
                displaySort = true  // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                document.querySelector('.total').style.display = "block"
                document.querySelector('.search_error_recipe').style.display = "none"
            }

            // Recherche du texte tapé dans les ingredients des recettes
            let ingredients = recipes[i].ingredients
            for (let j = 0; j < ingredients.length; j++) {
                let ingredientsList = ingredients[j].ingredient // recherche dans ingredients de la liste d'ingredients

                let searchWords = searchField.toLowerCase().split(' '); // Diviser la chaîne de recherche en mots individuels 
                if (searchWords.every(word => ingredientsList.toLowerCase().includes(word)) && displaySort == false) { // Si chaque mot est trouvé dans le nom des ingredients...
                    inputArray.push(recipes[i]) // ... la recette s'affiche
                    displaySort = true // Affichage des résultats triés
                    document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                    document.querySelector('.total').style.display = "block"
                    document.querySelector('.search_error_recipe').style.display = "none"
                    console.log(searchInput.value);
                }
            }

            // Recherche du texte tapé dans la description des recettes
            let description = recipes[i].description
            let searchWords = searchField.toLowerCase().split(' '); // Diviser la chaîne de recherche en mots individuels 
            if (searchWords.every(word => description.toLowerCase().includes(word)) && displaySort == false) { // Si chaque mot est trouvé dans la description...
                inputArray.push(recipes[i]) // ... la recette s'affiche
                displaySort = true // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                document.querySelector('.total').style.display = "block"
                document.querySelector('.search_error_recipe').style.display = "none"
            }
        }

        // Afficher message erreur quand aucune recette trouvée
        if (inputArray.length === 0) {
            document.querySelector('.total').style.display = "none";
            document.querySelector('.search_error_recipe').style.display = "block";
            document.querySelector('.search_error_recipe').innerHTML = "Aucune recette trouvée ! Essayez 'tarte aux pommes' ou 'poisson' par exemple...";
        }

        let inputUniqueArray = [...new Set(inputArray)]; // Afficher tableau sans les doublons

        displayRecipe(inputUniqueArray) // Affichage des recettes dans ce nouveau tableau
        displayLists(inputUniqueArray) // actualisation des listes
        tagsListener()
    }
}

// Affichage des recettes quand on tape 3 lettres dans la barre
const searchInput = document.getElementById('principal_search-bar');

searchInput.addEventListener('input', function () {
    // vérifier si le dernier caractère saisi est un espace avant d’appeler la fonction
    if (searchInput.value.length > 2 && searchInput.value.slice(-1) !== ' ') {
        globalSearch();

    } else if (searchInput.value.length == 0) {
        tagsFiltered(tagsArray) // actualisation des listes
        document.querySelector('.search_error').style.display = "none"
        document.querySelector('.total').style.display = "none"
        document.querySelector('.search_error_recipe').style.display = "none"

    } else if (searchInput.value.slice(-1) !== ' ') { // si espace entre deux mots, empêche le message d'erreur
        displayRecipe(recipes) // actualisation des listes
        document.querySelector('.search_error').style.display = "block";
        document.querySelector('.search_error_recipe').style.display = "none";
    }

})

document.querySelector('.total').style.display = "none"