
function clearInput(){
    document.getElementById('title').value = ''
    document.getElementById('ingredients').value = ''
}
document.addEventListener('DOMContentLoaded', function() {
    addSubmit()
    Api.getRecipes()
    Api.grabIngredients()
    clearInput()

});

function addSubmit(){
    document.getElementById('recipe-form').addEventListener('submit', Api.submitForm)
}

function submitInput(){
    return {
        recipe:{
            title: document.getElementById('title').value,
            ingredients: document.getElementById('ingredients').value,
        },
        ingredient: {
            name: document.getElementById('ingredients').value
        },
    }
}