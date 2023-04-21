
/************************************************************************************************************************************** */
//                                          Barre de recherche principale  - Algorythme version 2 - Boucles natives "for"
/************************************************************************************************************************************** */

function globalSearch() {
    const inputArray = [] // Création d'un tableau vide
    let searchField = document.getElementById('principal_search-bar').value // Séléction de la barre de recherche principale

    if (searchField.length < 3) {
        document.querySelector('.search_error').style.display = "block" // SI on tape moins de 3 lettres ... Message erreur s'affiche 
    } else {
        document.querySelector('.search_error').style.display = "none" // OU on tape plus de 3 lettres ... Message erreur disparait

        for (let i = 0; i < recipes.length; i++) { // Incrémentation de la valeur "letters" // passe sur chacune des recettes
            let displaySort = false // Affichage du tri

            // Recherche du texte tapé dans les noms de recettes
            let names = recipes[i].name
            if (names.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) { // Si les lettres tappées sont trouvées dans le nom de la recette...
                inputArray.push(recipes[i])
                displaySort = true  // Affichage des résultats triés
                document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                document.querySelector('.total').style.display = "block"
                document.querySelector('.search_error_recipe').style.display = "none"
            }

            // Recherche du texte tapé dans les ingredients des recettes
            let ingredients = recipes[i].ingredients
            for (let j = 0; j < ingredients.length; j++) {
                let ingredientsList = ingredients[j].ingredient // recherche dans ingredients de la liste d'ingredients
                if (ingredientsList.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) { // Si les lettres tappées sont trouvées dans le nom des ingredients...
                    inputArray.push(recipes[i])
                    displaySort = true // Affichage des résultats triés
                    document.querySelector('.total').innerHTML = inputArray.length + " " + "recettes trouvées" // Afficher nombre de recettes
                    document.querySelector('.total').style.display = "block"
                    document.querySelector('.search_error_recipe').style.display = "none"
                }
            }

            // Recherche du texte tapé dans la description des recettes
            let description = recipes[i].description
            if (description.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) { // Si les lettres tappées sont trouvées dans la description...
                inputArray.push(recipes[i])
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
        displayLists(inputUniqueArray)
        tagsListener()
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
        document.querySelector('.search_error_recipe').style.display = "none"

    } else { // ... sinon message d'erreur
        displayRecipe(recipes)
        document.querySelector('.search_error').style.display = "block"
        document.querySelector('.search_error_recipe').style.display = "none"

    }

})

document.querySelector('.total').style.display = "none"


