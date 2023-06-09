//********************************************************************************************************************
//                              Afficher listes des tags "ingredients", "appareils" et "ustensiles"  
// *******************************************************************************************************************
const tagNames = []
// Affichage des tags disponibles d'ingrédients, appareils et ustensiles.
function displayLists(listRecipes) { // Créer tableaux

    let ingredientsList = document.querySelector(".ingredients-section")
    const ingredientsArray = []

    let devicesList = document.querySelector(".appareils-section")
    const devicesArray = []

    let ustensilsList = document.querySelector(".ustensils-section")
    const ustensilsArray = []


    ingredientsList.innerHTML = ""
    devicesList.innerHTML = ""
    ustensilsList.innerHTML = ""

    // Affichage des ingredients --------------------------------------------------------
    listRecipes.forEach((recipe) => {
        const ingredients = recipe.ingredients// Recherche des ingrédients

        ingredients.forEach((ingredient) => {
            let ingredientsTab = ingredient.ingredient

            if (!tagNames.includes(ingredientsTab.toLowerCase())) {
                ingredientsArray.push(`<li class="ingredient_tag element">${ingredientsTab.toLowerCase()}</li>`)
            }

            // ingredientsList.style.display = "none" // Le tableau n'est pas affiché
            document.querySelector(".close-ingredient-button").style.display = "none" // l'icone de fermeture est masqué

            document.querySelector('.open-ingredient-button').addEventListener('click', e => { // quand on clique sur l'icone d'ouverture
                ingredientsList.style.display = "grid" // ... le tableau s'affiche
                document.querySelector(".open-ingredient-button").style.display = "none" // ... l'icone d'ouverture disparait
                document.querySelector(".close-ingredient-button").style.display = "block" //... et l'icone de fermeture apparait
                document.querySelector(".search_error").style.display = "none" // le message d'erreur si vous tapez moins de trois lettres disparaît
            })

            document.querySelector('.close-ingredient-button').addEventListener('click', e => { // quand on clique sur l'icone de fermeture
                ingredientsList.style.display = "none" // ... le tableau ne s'affiche pas
                document.querySelector(".open-ingredient-button").style.display = "block" //... l'icone d'ouverture apparait
                document.querySelector(".close-ingredient-button").style.display = "none" //... l'icone de fermeture disparait
            })
        })

        // Affichage des appareils ----------------------------------------------------------
        const devices = recipe.appliance
        if (!tagNames.includes(devices.toLowerCase())) {
            devicesArray.push(`<li class="device_tag element">${devices}</li>`)
        }

        //.style.display = "grid" // Le tableau n'est pas affiché
        document.querySelector(".close-devices-button").style.display = "none" // l'icone de fermeture est masqué

        document.querySelector('.open-devices-button').addEventListener('click', e => { // quand on clique sur l'icone d'ouverture
            devicesList.style.display = "grid" // ... le tableau s'affiche
            document.querySelector(".open-devices-button").style.display = "none" // ... l'icone d'ouverture disparait
            document.querySelector(".close-devices-button").style.display = "block" //... et l'icone de fermeture apparait
            document.querySelector(".search_error").style.display = "none" // le message d'erreur si tapez moins de trois lettres disparaît
        })

        document.querySelector('.close-devices-button').addEventListener('click', e => { // quand on clique sur l'icone de fermeture
            devicesList.style.display = "none" // ... le tableau ne s'affiche pas
            document.querySelector(".open-devices-button").style.display = "block" //... l'icone d'ouverture apparait
            document.querySelector(".close-devices-button").style.display = "none" //... l'icone de fermeture disparait
        })

        // Affichage des ustensiles -------------------------------------------------------------
        const ustensils = recipe.ustensils

        ustensils.forEach((ustensil) => {
            if (!tagNames.includes(ustensil.toLowerCase())) {
                ustensilsArray.push(`<li class="ustensil_tag element">${ustensil}</li>`)
            }

            //ustensilsList.style.display = "grid" // Le tableau n'est pas affiché
            document.querySelector(".close-ustensils-button").style.display = "none" // l'icone de fermeture est masqué
        })

        document.querySelector('.open-ustensils-button').addEventListener('click', e => { // quand on clique sur l'icone d'ouverture
            ustensilsList.style.display = "grid" // ... le tableau s'affiche
            document.querySelector(".open-ustensils-button").style.display = "none" // ... l'icone d'ouverture disparait
            document.querySelector(".close-ustensils-button").style.display = "block" //... et l'icone de fermeture apparait
            document.querySelector(".search_error").style.display = "none" // le message d'erreur si tapez moins de trois lettres disparaît

        })

        document.querySelector('.close-ustensils-button').addEventListener('click', e => { // quand on clique sur l'icone de fermeture
            ustensilsList.style.display = "none" // ... le tableau ne s'affiche pas
            document.querySelector(".open-ustensils-button").style.display = "block" //... l'icone d'ouverture apparait
            document.querySelector(".close-ustensils-button").style.display = "none" //... l'icone de fermeture disparait
        })
    })

    // Afficher les 3 tableaux ------------------------------------------------------------------
    let newIngredientsList = [...new Set(ingredientsArray)]
    ingredientsList.innerHTML += `${newIngredientsList.join("")}`

    let newDevicesList = [...new Set(devicesArray)];
    devicesList.innerHTML += `${newDevicesList.join("")}`

    let newUstensilsList = [...new Set(ustensilsArray)];
    ustensilsList.innerHTML += `${newUstensilsList.join("")}`


    // si liste des ingrédients est vide, alors la section disparait
    if (document.querySelectorAll(".ingredient_tag").length == 0) {
        document.querySelector(".ingredients-section").style.display = "none"
    }

    else {
        document.querySelector(".ingredients-section").style.display = "grid"
    }
    // si liste des appareils est vide, alors la section disparait
    if (document.querySelectorAll(".device_tag").length == 0) {
        document.querySelector(".appareils-section").style.display = "none"
    }
    else {
        document.querySelector(".appareils-section").style.display = "grid"
    }

    // si liste des ustensiles est vide, alors la section disparait
    if (document.querySelectorAll(".ustensil_tag").length == 0) {
        document.querySelector(".ustensils-section").style.display = "none"
    }
    else {
        document.querySelector(".ustensils-section").style.display = "grid"
    }
}

// Afficher les listes
displayLists(recipes)


/************************************************************************************************************************************** */
/* ------------------------------------   Tri des recettes avec les tags   -------------------------------------------*/
/************************************************************************************************************************************** */

const tagsArray = [] // création d'un tableau vide pour stocker les tags ajoutés

// Trier les recettes en fonction des tags ajoutés ou supprimés.
function tagsFiltered(tagsArray) { // fonction appellée chaque fois qu'on recherche une recette
    const newArray = []; // Création d'un tableau vide pour stocker les recettes qui correspondent aux tags

    recipes.forEach((recipe) => { // Boucle pour chaque recette...
        let displayTags = true; // Création d'un booléen initialisé à "true", 

        tagsArray.forEach((tag) => { // Boucle pour chaque tag qui va dans le tableau des tags
            const tagSplit = tag.split("_"); // On sépare la catégorie + nom de l'ingrédient

            if (tagSplit[0] == "ingredient") { //tri par ingrédient 

                // Une boucle "some" vérifie si l'ingrédient correspondant se trouve dans la liste des ingrédients de la recette
                const ingredientFound = recipe.ingredients.some((ingredient) => {
                    return tagSplit[1].toLowerCase() == ingredient.ingredient.toLowerCase();
                });
                if (!ingredientFound) {
                    displayTags = false; // l'ingredient n'est pas trouvé, on passe à false
                }

            } else if (tagSplit[0] == "ustensil") { //tri par ustensile 
                // Une boucle "some" vérifie si l'ustensile correspondant se trouve dans la liste des ustensiles de la recette
                const ustensilFound = recipe.ustensils.some((ustensil) => {
                    return tagSplit[1].toLowerCase() == ustensil.toLowerCase();
                });
                if (!ustensilFound) {
                    displayTags = false; // l'ustensile n'est pas trouvé, on passe à false
                }

            } else if (tagSplit[0] == "device") { //tri par appareil
                // Une boucle "some" vérifie si l'appareil correspondant se trouve dans la liste des appareils de la recette
                if (tagSplit[1].toLowerCase() != recipe.appliance.toLowerCase()) {
                    displayTags = false; // l'appareil n'est pas trouvé, on passe à false
                }
            }
        });

        if (displayTags) {
            newArray.push(recipe); // tous les tags ont été trouvés, on ajoute la recette

        }
    });

    if (newArray.length === 0) {
        // Si la longueur est 0, cela signifie qu'aucune recette n'a été trouvée et un message d'erreur est affiché
        document.querySelector(".search_error_recipe").innerHTML = "<p>Aucune recette trouvée...</p>";
        document.querySelector(".search_error_recipe").style.display = "block"
        document.querySelector(".recipes-section").style.display = "none"
        document.querySelector('.total').style.display = "none"

    } else {
        // Recette trouvée, afficher les recettes correspondantes
        document.querySelector(".search_error_recipe").style.display = "none"
        document.querySelector(".recipes-section").style.display = "grid"
        displayRecipe(newArray);

        // Afficher le nombre de recettes trouvées
        document.querySelector('.total').innerHTML = newArray.length + " " + "recettes trouvées"
        document.querySelector('.total').style.display = "block"

    }
    displayLists(newArray) //afficher les listes déroulantes de tags
    tagsListener() //  ajouter des écouteurs d'événements pour les tags sélectionnés







}



/************************************************************************************************************************************** */
/* -----------------------------------------  AFFICHAGE DES TAGS   ---------------------------------------------------------------------*/
/****************************************************************************************************************************************/
// Gestion des événements d'ajout ou suppression des tags.
function tagsListener() {
    let tagSection = document.querySelector(".tags-section")  // section des tags "ingredients"

    let ingredientSection = document.querySelector(".ingredients-section")
    let ingredientsTag = document.querySelectorAll(".ingredients-tags") // bouton de tag "ingredients"
    let ingredientsElement = document.querySelectorAll(".ingredient_tag") // ingredient de la liste

    let devicesSection = document.querySelector(".appareils-section")

    let element = document.querySelectorAll(".element")
    let ustensilsSection = document.querySelector(".ustensils-section")



    // INGREDIENTS ..........................................
    // au clic sur un ingrédient, celui-ci apparait en tag
    document.querySelectorAll(".ingredient_tag").forEach(ingredientElement => {
        ingredientElement.addEventListener('click', e => {

            const ingredientDiv = document.createElement('div')
            ingredientDiv.classList.add('ingredients-tags', 'tags')
            ingredientDiv.innerHTML = `<p>${e.target.innerText}</p><i class="ingredients-close fa-regular fa-circle-xmark"></i>`
            tagSection.appendChild(ingredientDiv) // le tag apparait
            let ingredientClose = ingredientDiv.querySelector(".ingredients-close")

            // au clic sur la croix, le tag de l'ingredient disparait
            ingredientClose.addEventListener('click', e => {
                const tagText = e.target.previousSibling.textContent.trim();
                //récupère le texte du tag "ingrédient" qui vient juste avant la croix et stocke dans la variable "tagText".

                e.target.closest('div').remove() // le tag disparait de la section des tags
                ingredientSection.appendChild(ingredientElement) // le tag se rajoute à la liste des ingrédients
                const tagIndex = tagsArray.indexOf("ingredient_" + tagText) // chercher l'index du tag "ingrédient" dans le tableau "tagsArray" et le retire du tableau

                tagsArray.splice(tagIndex, 1) // mettre à jour le tableau "tagsArray" sans le tag qui vient d'être supprimé.
                tagNames.splice(tagIndex, 1)
                tagsFiltered(tagsArray) // Afficher les recettes en fonction des tags restants
            })

            tagsArray.push("ingredient_" + e.target.innerText) // ajout des tags "ingredients" dans le tableau des tags
            tagNames.push(e.target.innerText.toLowerCase())
            tagsFiltered(tagsArray)
            document.querySelector(".close-ingredient-button").style.display = "block" // l'icone de fermeture apparait
            document.querySelector(".open-ingredient-button").style.display = "none" // l'icone d'ouverture disparait

        })
    })



    // APPAREILS..........................................
    // au clic sur un appareil, celui-ci apparait en tag
    document.querySelectorAll(".device_tag").forEach(devicesElement => {
        devicesElement.addEventListener('click', e => {

            const deviceDiv = document.createElement('div')
            deviceDiv.classList.add('devices-tags', 'tags')
            deviceDiv.innerHTML = `<p>${e.target.innerText}</p><i class="devices-close fa-regular fa-circle-xmark"></i>`
            tagSection.appendChild(deviceDiv) //  le tag apparait
            let deviceClose = deviceDiv.querySelector(".devices-close")

            // au clic sur la croix, le tag de l'appareil disparait
            deviceClose.addEventListener('click', e => {
                const tagText = e.target.previousSibling.textContent.trim()
                //récupère le texte du tag "device" qui vient juste avant la croix et stocke dans la variable "tagText".

                e.target.closest('div').remove() // le tag disparait de la section des tags
                devicesSection.appendChild(devicesElement)          // l'appareil réapparait dans la liste des appareils
                const tagIndex = tagsArray.indexOf("device_" + tagText) // chercher l'index du tag "device" dans le tableau "tagsArray" et le retire du tableau

                tagsArray.splice(tagIndex, 1) // mettre à jour le tableau "tagsArray" sans le tag qui vient d'être supprimé.
                tagNames.splice(tagIndex, 1)
                tagsFiltered(tagsArray) // Afficher les recettes en fonction des tags restants
            })
            tagsArray.push("device_" + e.target.innerText) // ajout des tags "appareils" dans le tableau des tags
            tagNames.push(e.target.innerText.toLowerCase())
            tagsFiltered(tagsArray)
            document.querySelector(".close-devices-button").style.display = "block" // l'icone de fermeture apparait
            document.querySelector(".open-devices-button").style.display = "none" // l'icone d'ouverture disparait

        })
    })


    // USTENSILS..........................................
    // au clic sur un ustensile, celui-ci apparait en tag
    document.querySelectorAll(".ustensil_tag").forEach(ustensilsElement => {
        ustensilsElement.addEventListener('click', e => {

            const ustensilDiv = document.createElement('div')
            ustensilDiv.classList.add('ustensils-tags', 'tags')
            ustensilDiv.innerHTML = `<p>${e.target.innerText}</p><i class="ustensils-close fa-regular fa-circle-xmark"></i>`
            tagSection.appendChild(ustensilDiv) // le tag apparait
            let ustensilClose = ustensilDiv.querySelector(".ustensils-close")

            // au clic sur la croix, le tag de l'ingredient disparait
            ustensilClose.addEventListener('click', e => {
                const tagText = e.target.previousSibling.textContent.trim()
                //récupère le texte du tag "device" qui vient juste avant la croix et stocke dans la variable "tagText".

                e.target.closest('div').remove() // le tag disparait de la section des tags
                ustensilsSection.appendChild(ustensilsElement)          // l'ustensile  réapparait dans la liste des ustensiles
                const tagIndex = tagsArray.indexOf("ustensil_" + tagText) // chercher l'index du tag "device" dans le tableau "tagsArray" et le retire du tableau

                tagsArray.splice(tagIndex, 1) // mettre à jour le tableau "tagsArray" sans le tag qui vient d'être supprimé.
                tagNames.splice(tagIndex, 1)
                tagsFiltered(tagsArray) // Afficher les recettes en fonction des tags restants
            })

            tagsArray.push("ustensil_" + e.target.innerText)  // ajout des tags "ustensiles" dans le tableau des tags
            tagNames.push(e.target.innerText.toLowerCase())
            tagsFiltered(tagsArray)
            document.querySelector(".close-ustensils-button").style.display = "block" // l'icone de fermeture apparait
            document.querySelector(".open-ustensils-button").style.display = "none" // l'icone de ouverture disparait

        })
    })
}

document.querySelector(".ingredients-section").style.display = "none"
document.querySelector(".appareils-section").style.display = "none"
document.querySelector(".ustensils-section").style.display = "none"


tagsListener()


