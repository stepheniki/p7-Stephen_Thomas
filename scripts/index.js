// ---------------------------   Affichage des recettes  ------------------------------------------------------------

function displayRecipe(recipesArray) {
    const cardsSection = document.querySelector('.recipes-section');
    cardsSection.innerHTML = "";

    recipesArray.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        cardsSection.appendChild(recipeCardDOM);
    });
}
displayRecipe(recipes);

// Affichage des données du fichier recipes.js
function recipesFactory(data) {
    const { id, name, time, description, unit } = data;

    function getRecipeCardDOM() {
        const card = document.createElement('article'); // Création d'article
        card.setAttribute('class', 'recipes-card'); // Création de classes
        card.setAttribute('id', `${id}`); // Attribution de l'id  

        // Affichage de l'image, du titre et du temps
        let codeHtml = `
        <div class="image-container"></div>
            <div class="recipe-text-container">
            <div class="text-container">
                <div class="recipe-name">${name}</div>
                <div class="recipe-time"><i class="fa-regular fa-clock"></i> ${time} min</div>
            </div>
            <div class="infolist">
            <div class="column">
        `

        data.ingredients.forEach(ingredient => {
            let ingredientName = ingredient.ingredient;
            let quantityName = ingredient.quantity;
            let unitName = ingredient.unit;

            if (!unitName) { // Si pas d'unité de mesure...
                unitName = ""; // ..."undefined" disparait
            }

            // Affichage des ingrédients, quantité et mesures
            codeHtml += `
         <div class="ingredient-list">
        <span class="ingredient-name">${ingredientName}:</span>
        <span class="ingredient-quantity">${quantityName}</span>
        <span class="ingredient-unit"> ${unitName}</span>
        </div> 
        `;
        });

        // Fin de la <div> "column"
        codeHtml += "</div>"

        // Affichage de la description de la recette
        codeHtml += `
        <div class="description-list">${description}</div>
        `
        // Fin de la <div> "infolist"
        codeHtml += "</div>"

        // Fin de la <div> "recipe-text-container"
        codeHtml += "</div>"
        card.innerHTML = codeHtml // Texte Html de la carte
        return (card)
    }

    return { getRecipeCardDOM }
}























