document.addEventListener('DOMContentLoaded', function(){
    addSubmitEventToForm();
});

let ingredients = [];

function createRecipe(){
return {
    title: document.getElementById('title').value,
    ingredient: document.getElementById('ingredient').value,
}
}

function loadRecipes(){
    //let ul = document.getElementById("ul")
}

//const app = new

var collapsibleRecipeButton = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsibleRecipeButton.length; i++) {
    collapsibleRecipeButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function displayRecipe(recipe){
    document.getElementsByClassName('card')[0].innerHTML += formatRecipe(recipe);
}

function formatRecipe(recipe){
    return `
    <div class="card">
    <button type="button" class="collapsible">${recipe.title}</button>
        <div class="content">
            <p>${recipe.ingredients}</p>
            </div>
                </div>
                   </div>`
}


function submitForm(event){
    event.preventDefault();
    let recipe = createRecipe()
    displayRecipe(recipe)
}

function emptyForm(){
           
}

function addSubmitEventToForm(){
document.getElementById("recipe-form").addEventListener('submit', submitForm)
}