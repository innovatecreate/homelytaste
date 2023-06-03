// This JavaScript file is used to add functionality to the Homely Taste website.

// Function to show the recipe details
function showRecipeDetails(event) {
  // Get the recipe ID from the event object
  const recipeId = event.target.dataset.recipeId;

  // Load the recipe details from the server
  fetch(`/recipes/${recipeId}`)
    .then(response => response.json())
    .then(recipe => {
      // Show the recipe details in a modal dialog
      const modal = document.querySelector('#recipe-details-modal');
      modal.querySelector('.recipe-title').innerText = recipe.title;
      modal.querySelector('.recipe-ingredients').innerText = recipe.ingredients;
      modal.querySelector('.recipe-instructions').innerText = recipe.instructions;
      modal.style.display = 'block';
    });
}

// Event listener for the recipe links
document.querySelectorAll('.image a').forEach(link => {
  link.addEventListener('click', showRecipeDetails);
});
