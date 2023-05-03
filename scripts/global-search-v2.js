
/************************************************************************************************************************************** */
//                                          Barre de recherche principale  - Algorythme version 2 - Boucles "foreach"
/************************************************************************************************************************************** */

function globalSearch() {



    const inputArray = []
    let searchField = document.getElementById('principal_search-bar').value
    if (searchField.replace(/\s+/g, '').length < 3) { // Les espaces ne sont pas comptés comme des caractères, les supprimer de la chaîne de recherche avant de vérifier sa longueur
        document.querySelector('.search_error').style.display = "block"
    } else {
        document.querySelector('.search_error').style.display = "none"

        recipes.forEach(recipe => { // Incrémentation de la valeur "letters" 
            let displaySort = false // Affichage du tri
            let names = recipe.name

            let searchWord = searchField.toLowerCase().split(' ') // Diviser la chaîne de recherche en mots individuels 
            if (searchWord.every(word => names.toLowerCase().includes(word)) && displaySort == false) {    // Si chaque mot est trouvé dans le nom de la recette...
                inputArray.push(recipe)
                displaySort = true  // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées"
                document.querySelector('.total').style.display = "block"
                document.querySelector('.search_error_recipe').style.display = "none"

            }
            recipe.ingredients.forEach(ingredient => {
                let ingredientsList = ingredient.ingredient // recherche dans ingredients de la liste d'ingredients
                let searchWords = searchField.toLowerCase().split(' '); // Diviser la chaîne de recherche en mots individuels 
                if (searchWords.every(word => ingredientsList.toLowerCase().includes(word)) && displaySort == false) { // Si chaque mot est trouvé dans le nom des ingredients...
                    inputArray.push(recipe)
                    displaySort = true // Affichage des résultats triés
                    document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                    document.querySelector('.total').style.display = "block"
                    document.querySelector('.search_error_recipe').style.display = "none"

                }
            })
            let description = recipe.description
            let searchWords = searchField.toLowerCase().split(' '); // Diviser la chaîne de recherche en mots individuels 
            if (searchWords.every(word => description.toLowerCase().includes(word)) && displaySort == false) { // Si chaque mot est trouvé dans la description...
                inputArray.push(recipe)
                displaySort = true // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                document.querySelector('.total').style.display = "block"
                document.querySelector('.search_error_recipe').style.display = "none"

            }

            // Afficher message erreur quand aucune recette trouvée
            if (inputArray.length === 0) {
                document.querySelector('.total').style.display = "block";
                document.querySelector('.search_error_recipe').style.display = "block";
                document.querySelector('.search_error_recipe').innerHTML = "Aucune recette trouvée ! Essayez 'tarte aux pommes' ou 'poisson' par exemple...";
            }

            let inputUniqueArray = [...new Set(inputArray)]; // Afficher tableau sans les doublons
            displayRecipe(inputUniqueArray) // Affichage des recettes dans ce nouveau tableau
            displayLists(inputUniqueArray)
            tagsListener()
        })
    }
}

// Affichage des recettes quand on tape 3 lettres dans la barre
const searchInput = document.getElementById('principal_search-bar');

searchInput.addEventListener('input', function () {
    // vérifier si le dernier caractère saisi est un espace avant d’appeler la fonction
    if (searchInput.value.length > 2 && searchInput.value.slice(-1) !== ' ') {
        globalSearch();

    } else if (searchInput.value.length == 0) { // si pas de texte tapé

        document.querySelector('.search_error').style.display = "none"
        document.querySelector('.total').style.display = "block"
        document.querySelector('.search_error_recipe').style.display = "none"
        tagsFiltered(tagsArray) // actualisation des listes


    } else if (searchInput.value.slice(-1) !== ' ') { // si espace entre deux mots, empêche le message d'erreur
        displayRecipe(recipes) // actualisation des listes
        document.querySelector('.search_error').style.display = "block";
        document.querySelector('.search_error_recipe').style.display = "none";
    }
})

document.querySelector('.total').style.display = "block"
document.querySelector('.total').innerHTML = recipes.length + " recettes trouvées"