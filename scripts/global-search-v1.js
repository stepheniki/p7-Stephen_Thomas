/************************************************************************************************************************************** */
//                                          Barre de recherche principale  - Algorythme version 1 - Boucles "foreach"
/************************************************************************************************************************************** */
function globalSearch() {
    const inputArray = []
    let searchField = document.getElementById('principal_search-bar').value
    if (searchField.length < 3) {
        document.querySelector('.search_error').style.display = "block" // 
    } else {
        document.querySelector('.search_error').style.display = "none"
        recipes.forEach(recipe => { // Incrémentation de la valeur "letters" 
            let displaySort = false // Affichage du tri
            let names = recipe.name
            if (names.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                inputArray.push(recipe)
                displaySort = true  // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées"
                document.querySelector('.total').style.display = "block"
            }
            recipe.ingredients.forEach(ingredient => {
                let ingredientsList = ingredient.ingredient // recherche dans ingredients de la liste d'ingredients
                if (ingredientsList.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                    inputArray.push(recipe)
                    displaySort = true // Affichage des résultats triés
                    document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                    document.querySelector('.total').style.display = "block"
                }
            })
            let description = recipe.description
            if (description.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) { // Si les lettres tappées sont trouvées dans la description...
                inputArray.push(recipe)
                displaySort = true // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                document.querySelector('.total').style.display = "block"
            }

            // Afficher message erreur quand aucune recette trouvée
            if (inputArray.length === 0) {
                document.querySelector('.total').style.display = "none";
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
    if (searchInput.value.length > 2) { // Si au moins 3 lettres tapées, le tri se fait...
        globalSearch()

    } else if (searchInput.value.length == 0) {
        document.querySelector('.search_error').style.display = "none"
        document.querySelector('.total').style.display = "none"


    } else { // ... sinon message d'erreur
        displayRecipe(recipes)
        document.querySelector('.search_error').style.display = "block"
    }


})

document.querySelector('.total').style.display = "none"